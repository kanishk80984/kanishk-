import { useState, useEffect } from 'react';

/** Pixels: sticky bar + small offset so the “current” section matches what you’re reading. */
const HEADER_SCROLL_OFFSET = 76;

/**
 * Tracks which section id is currently “active” while scrolling (for nav highlight).
 * @param {string[]} sectionIds — ordered top-to-bottom (e.g. hero, about, …)
 */
export function useActiveNavSection(sectionIds) {
  const [activeId, setActiveId] = useState(() => sectionIds[0] ?? '');

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    const compute = () => {
      const y = window.scrollY + HEADER_SCROLL_OFFSET;
      let active = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= y) active = id;
      }
      setActiveId((prev) => (prev === active ? prev : active));
    };

    compute();
    window.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute);
    return () => {
      window.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
    };
  }, [sectionIds]);

  return activeId;
}
