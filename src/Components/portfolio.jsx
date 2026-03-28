import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import profilePhoto from '../assect/WhatsApp Image 2026-03-28 at 16.48.33.jpeg';
import resumePdf from '../assect/A KANISHK.pdf';
import { useColorMode } from '../context/ColorModeContext';
import { useInView } from '../hooks/useInView';
import { useActiveNavSection } from '../hooks/useActiveNavSection';

const CONTACT = {
  email: 'kanishkanandhan@gmail.com',
  phoneDisplay: '9080929128',
  whatsappHref: 'https://wa.me/919080929128',
  linkedinHref: 'https://www.linkedin.com/in/kanishk-a/',
  location: 'Erode, Tamil Nadu',
};

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
];

const NAV_SECTION_IDS = navItems.map((item) => item.id);

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** If the URL contains #section, scroll there after load (shareable links). */
function useHashScroll() {
  useEffect(() => {
    const run = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash) scrollToId(hash);
    };
    const t = window.setTimeout(run, 80);
    window.addEventListener('hashchange', run);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('hashchange', run);
    };
  }, []);
}

function AnimatedSection({ id, children, sx, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <Box
      ref={ref}
      id={id}
      component="section"
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default function Portfolio() {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isLight = theme.palette.mode === 'light';
  const activeNavId = useActiveNavSection(NAV_SECTION_IDS);

  useHashScroll();

  const skillGroups = [
    {
      title: 'Programming',
      items: ['Java', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks',
      items: ['React.js', 'Node.js'],
    },
    {
      title: 'Automation & AI',
      items: ['n8n', 'AI Agents'],
    },
    {
      title: 'Tools',
      items: ['REST APIs', 'Webhooks', 'MySQL', 'MongoDB', 'XAMPP', 'Git'],
    },
    {
      title: 'Core',
      items: ['Problem Solving', 'OOPS'],
    },
  ];

  const education = [
    {
      title: 'B.Tech — Information Technology',
      place: 'Erode Sengunthar Engineering College',
      period: '2022 – 2026',
      detail: 'CGPA: 7.81',
    },
    {
      title: 'HSC',
      place: 'Kamaraj Municipal Boys Higher Secondary School',
      period: '2021 – 2022',
      detail: 'Percentage: 64%',
    },
  ];

  const experience = {
    role: 'Full Stack Development Intern',
    company: 'Webase Brandings',
    location: 'Erode',
    points: [
      'Developed AI agents and WhatsApp-based e-commerce systems.',
      'Designed and implemented n8n workflows.',
      'Integrated WhatsApp API for customer interaction and order processing.',
      'Built frontend interfaces and backend logic using modern web technologies.',
      'Designed database schemas and handled API integrations.',
    ],
  };

  const projects = [
    {
      title: 'Edu-Connect',
      subtitle: 'College Academic Portal',
      points: [
        'Developed a full-stack academic management system using React.js and Node.js.',
        'Designed REST APIs for managing student academic data.',
        'Built responsive UI for admin, staff, and advisors.',
        'Integrated WhatsApp API to send student results automatically.',
      ],
      tags: ['React.js', 'Node.js', 'REST APIs', 'WhatsApp API'],
    },
    {
      title: 'WhatsApp E-Commerce Automation',
      subtitle: 'n8n workflows',
      points: [
        'Developed WhatsApp-based e-commerce automation using n8n workflows.',
        'Implemented product listing, order placement, and payment integration.',
        'Automated customer interactions and order confirmations.',
      ],
      tags: ['n8n', 'WhatsApp', 'Automation'],
    },
  ];

  const achievements = [
    {
      title: 'AI automation & agents',
      points: [
        'Built AI agents to automate workflows and decision-making.',
        'Integrated APIs for real-time interaction.',
        'Designed automation pipelines.',
      ],
    },
    {
      title: '2nd Prize — Rapid Coding',
      points: ['CIT Coimbatore'],
      compact: true,
    },
  ];

  const interests = [
    'Software Development',
    'Front-End Development',
    'Automation & AI Systems',
  ];

  const heroBg = isLight
    ? 'linear-gradient(135deg, rgba(224, 242, 254, 0.95) 0%, rgba(241, 245, 249, 1) 40%, rgba(238, 242, 255, 0.9) 100%)'
    : 'linear-gradient(135deg, rgba(10, 22, 40, 1) 0%, rgba(15, 23, 42, 0.95) 50%, rgba(30, 27, 75, 0.35) 100%)';

  const heroMesh =
    isLight
      ? 'radial-gradient(ellipse 90% 70% at 10% -10%, rgba(14, 165, 233, 0.2), transparent 55%), radial-gradient(ellipse 70% 50% at 100% 0%, rgba(99, 102, 241, 0.12), transparent 50%)'
      : 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(56, 189, 248, 0.22), transparent 55%), radial-gradient(ellipse 60% 50% at 100% 0%, rgba(99, 102, 241, 0.12), transparent 50%)';

  const titleGradient = isLight
    ? 'linear-gradient(120deg, #0f172a 0%, #0369a1 45%, #4f46e5 100%)'
    : 'linear-gradient(120deg, #e2e8f0 0%, #38bdf8 45%, #a5b4fc 100%)';

  const sectionAltBg = isLight ? 'rgba(15, 23, 42, 0.03)' : 'rgba(15, 23, 42, 0.5)';

  return (
    <>
      <CssBaseline />
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1100,
        }}
      >
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            bgcolor: isLight ? 'rgba(255, 255, 255, 0.88)' : 'rgba(10, 22, 40, 0.88)',
            backdropFilter: 'blur(14px)',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', py: 0.5, gap: 1 }}>
            <Typography
              variant="h6"
              component="a"
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('hero');
              }}
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'primary.main',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              KANISHK A
            </Typography>

            <Stack direction="row" alignItems="center" spacing={0.5}>
              <IconButton
                onClick={toggleColorMode}
                color="inherit"
                aria-label={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                sx={{ color: 'text.primary' }}
              >
                {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
              </IconButton>

              {isMdUp ? (
                <Stack
                  direction="row"
                  spacing={0.5}
                  sx={{ flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center' }}
                >
                  {navItems.map((item) => {
                    const isActive = activeNavId === item.id;
                    return (
                      <Button
                        key={item.id}
                        color="inherit"
                        onClick={() => scrollToId(item.id)}
                        aria-current={isActive ? 'page' : undefined}
                        sx={{
                          textTransform: 'none',
                          fontWeight: isActive ? 600 : 500,
                          fontSize: '0.8125rem',
                          px: 1.25,
                          py: 0.75,
                          minWidth: 'auto',
                          borderRadius: 2,
                          color: isActive ? 'primary.main' : 'text.secondary',
                          bgcolor: isActive ? 'action.hover' : 'transparent',
                          transition: 'background-color 0.2s ease, color 0.2s ease',
                          '&:hover': {
                            color: 'primary.main',
                            bgcolor: 'action.hover',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    );
                  })}
                </Stack>
              ) : (
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="open menu"
                  onClick={() => setDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Stack>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{ sx: { width: 300, bgcolor: 'background.default' } }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', px: 1 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Menu
            </Typography>
            <IconButton onClick={() => setDrawerOpen(false)} aria-label="close menu">
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List sx={{ py: 1 }}>
            {navItems.map((item) => {
              const isActive = activeNavId === item.id;
              return (
                <ListItemButton
                  key={item.id}
                  selected={isActive}
                  onClick={() => {
                    scrollToId(item.id);
                    setDrawerOpen(false);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  sx={{
                    borderRadius: 2,
                    mx: 1,
                    mb: 0.25,
                    py: 1.25,
                    '&.Mui-selected': {
                      bgcolor: 'action.hover',
                      color: 'primary.main',
                      '&:hover': { bgcolor: 'action.hover' },
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.9375rem',
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Drawer>
      </Box>

      <Box component="main">
        <Box
          component="section"
          id="hero"
          className="portfolio-hero-mesh"
          sx={{
            pt: { xs: 5, md: 8 },
            pb: { xs: 7, md: 10 },
            position: 'relative',
            overflow: 'hidden',
            background: `${heroMesh}, ${heroBg}`,
          }}
        >
          <Container maxWidth="lg">
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 4, md: 8 }}
              alignItems="center"
            >
              <Box
                sx={{
                  position: 'relative',
                  flexShrink: 0,
                  color: 'primary.main',
                }}
                className="portfolio-avatar-glow"
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: -4,
                      borderRadius: '50%',
                      background: isLight
                        ? 'linear-gradient(135deg, rgba(14,165,233,0.5), rgba(99,102,241,0.45))'
                        : 'linear-gradient(135deg, rgba(56,189,248,0.9), rgba(99,102,241,0.85))',
                      opacity: 0.85,
                      filter: 'blur(2px)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={profilePhoto}
                    alt="KANISHK A — profile"
                    className="portfolio-avatar-ring"
                    sx={{
                      position: 'relative',
                      width: { xs: 188, sm: 220 },
                      height: { xs: 188, sm: 220 },
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid',
                      borderColor: 'background.paper',
                      boxShadow: isLight
                        ? '0 20px 40px rgba(15, 23, 42, 0.12)'
                        : '0 24px 48px rgba(0,0,0,0.35)',
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="overline"
                  sx={{ color: 'primary.main', letterSpacing: '0.18em', fontWeight: 600 }}
                >
                  Software Developer
                </Typography>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    lineHeight: 1.12,
                    mt: 0.5,
                    mb: 1,
                    background: titleGradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  KANISHK A
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 500, mb: 2 }}>
                  Automation &amp; AI
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    maxWidth: 540,
                    mx: { xs: 'auto', md: 0 },
                    mb: 3,
                    lineHeight: 1.75,
                  }}
                >
                  Seeking a software development role where I can leverage front-end development,
                  automation (n8n), and AI agent creation to build scalable, intelligent
                  applications.
                </Typography>

                <Stack
                  direction="row"
                  flexWrap="wrap"
                  useFlexGap
                  spacing={1}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                  sx={{ mb: 3 }}
                >
                  <Chip
                    size="small"
                    icon={<EmailRoundedIcon sx={{ fontSize: 18 }} />}
                    component="a"
                    href={`mailto:${CONTACT.email}`}
                    clickable
                    label={CONTACT.email}
                    sx={{ fontWeight: 500 }}
                  />
                  <Chip
                    size="small"
                    icon={<PhoneAndroidRoundedIcon sx={{ fontSize: 18 }} />}
                    component="a"
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    clickable
                    label={CONTACT.phoneDisplay}
                    sx={{ fontWeight: 500 }}
                    aria-label={`WhatsApp ${CONTACT.phoneDisplay}`}
                  />
                  <Chip
                    size="small"
                    icon={<LocationOnRoundedIcon sx={{ fontSize: 18 }} />}
                    label={CONTACT.location}
                    variant="outlined"
                  />
                </Stack>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    href={resumePdf}
                    download="KANISHK-A-Resume.pdf"
                    className="portfolio-btn-primary"
                    sx={{
                      px: 3,
                      py: 1.25,
                      fontWeight: 600,
                      textTransform: 'none',
                      boxShadow: isLight
                        ? '0 8px 28px rgba(3, 105, 161, 0.28)'
                        : '0 8px 32px rgba(56, 189, 248, 0.35)',
                    }}
                    startIcon={<DownloadRoundedIcon />}
                  >
                    Download resume
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToId('contact')}
                    className="portfolio-btn-ghost"
                    sx={{
                      px: 3,
                      py: 1.25,
                      fontWeight: 600,
                      textTransform: 'none',
                      borderWidth: 2,
                      '&:hover': { borderWidth: 2 },
                    }}
                    startIcon={<EmailRoundedIcon />}
                  >
                    Hire / contact
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Box>

        <AnimatedSection id="about" sx={{ py: { xs: 7, md: 9 }, bgcolor: sectionAltBg }}>
          <Container maxWidth="md">
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
              Profile
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9, mb: 2 }}>
              I focus on clear UI, reliable APIs, and automation that saves time. My experience spans
              React and Node, n8n workflows, WhatsApp integrations, and AI agents for real business
              outcomes.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
              Based in {CONTACT.location}. Open to roles where I can grow as a software developer
              while shipping production-quality features.
            </Typography>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="skills" sx={{ py: { xs: 7, md: 9 } }} delay={50}>
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
              Skills
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4, maxWidth: 640 }}>
              Programming, frameworks, automation, and tools — aligned with my resume.
            </Typography>
            <Stack spacing={4}>
              {skillGroups.map((group) => (
                <Box key={group.title}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: 'primary.main' }}>
                    {group.title}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1.25}>
                    {group.items.map((s) => (
                      <Chip
                        key={s}
                        label={s}
                        className="portfolio-chip-tilt"
                        sx={{
                          px: 0.5,
                          py: 2.25,
                          fontWeight: 500,
                          bgcolor: 'action.hover',
                          border: '1px solid',
                          borderColor: 'divider',
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Container>
        </AnimatedSection>

        <AnimatedSection
          id="education"
          sx={{ py: { xs: 7, md: 9 }, bgcolor: sectionAltBg }}
          delay={50}
        >
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
              Education
            </Typography>
            <Stack spacing={2.5}>
              {education.map((ed) => (
                <Card
                  key={ed.title}
                  elevation={0}
                  className="portfolio-card-lift"
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                    <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                      <SchoolRoundedIcon color="primary" sx={{ mt: 0.25 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
                          {ed.title}
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                          {ed.place}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 0.5, fontWeight: 600 }}>
                          {ed.period} · {ed.detail}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="experience" sx={{ py: { xs: 7, md: 9 } }} delay={50}>
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
              Experience
            </Typography>
            <Card
              elevation={0}
              className="portfolio-card-lift"
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: 'background.paper',
              }}
            >
              <Box
                sx={{
                  px: { xs: 2.5, sm: 3 },
                  py: 2,
                  background: isLight
                    ? 'linear-gradient(90deg, rgba(14,165,233,0.08), transparent)'
                    : 'linear-gradient(90deg, rgba(56,189,248,0.12), transparent)',
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <WorkRoundedIcon color="primary" />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {experience.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {experience.company} · {experience.location}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <CardContent sx={{ pt: 2 }}>
                <Stack component="ul" spacing={1.25} sx={{ m: 0, pl: 2.25 }}>
                  {experience.points.map((pt) => (
                    <Typography key={pt} component="li" variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                      {pt}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Container>
        </AnimatedSection>

        <AnimatedSection
          id="projects"
          sx={{ py: { xs: 7, md: 9 }, bgcolor: sectionAltBg }}
          delay={50}
        >
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
              Projects
            </Typography>
            <Stack spacing={3}>
              {projects.map((p) => (
                <Card
                  key={p.title}
                  elevation={0}
                  className="portfolio-card-lift"
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {p.title}
                    </Typography>
                    <Typography variant="subtitle2" color="primary" sx={{ mb: 2, fontWeight: 600 }}>
                      {p.subtitle}
                    </Typography>
                    <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2.25, mb: 2 }}>
                      {p.points.map((pt) => (
                        <Typography key={pt} component="li" variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                          {pt}
                        </Typography>
                      ))}
                    </Stack>
                    <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1}>
                      {p.tags.map((t) => (
                        <Chip key={t} size="small" label={t} variant="outlined" />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="achievements" sx={{ py: { xs: 7, md: 9 } }} delay={50}>
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
              Achievements &amp; interests
            </Typography>
            <Stack spacing={2.5}>
              {achievements.map((a) => (
                <Card
                  key={a.title}
                  elevation={0}
                  className="portfolio-card-lift"
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                    <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                      <EmojiEventsRoundedIcon color="primary" sx={{ mt: 0.25 }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
                          {a.title}
                        </Typography>
                        {a.compact ? (
                          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                            {a.points[0]}
                          </Typography>
                        ) : (
                          <Stack component="ul" spacing={0.75} sx={{ m: 0, pl: 2.25, mt: 1 }}>
                            {a.points.map((pt) => (
                              <Typography key={pt} component="li" variant="body2" color="text.secondary">
                                {pt}
                              </Typography>
                            ))}
                          </Stack>
                        )}
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
            <Typography variant="subtitle2" sx={{ mt: 3, mb: 1.5, fontWeight: 700 }}>
              Interests
            </Typography>
            <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1}>
              {interests.map((i) => (
                <Chip key={i} label={i} variant="outlined" className="portfolio-chip-tilt" />
              ))}
            </Stack>
          </Container>
        </AnimatedSection>

        <AnimatedSection
          id="contact"
          sx={{
            py: { xs: 8, md: 11 },
            background: isLight
              ? 'linear-gradient(180deg, transparent, rgba(14, 165, 233, 0.06) 40%, transparent)'
              : 'linear-gradient(180deg, transparent, rgba(56, 189, 248, 0.06) 40%, transparent)',
          }}
          delay={50}
        >
          <Container maxWidth="md">
            <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 700, mb: 1 }}>
              Contact
            </Typography>
            <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4, maxWidth: 520, mx: 'auto' }}>
              HR and recruiters: use the buttons below — email, WhatsApp, and LinkedIn open directly
              in the right app or tab.
            </Typography>
            <Stack spacing={2} alignItems="stretch" sx={{ maxWidth: 440, mx: 'auto' }}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                href={`mailto:${CONTACT.email}`}
                className="portfolio-btn-primary"
                sx={{ py: 1.5, fontWeight: 600, textTransform: 'none' }}
                startIcon={<EmailRoundedIcon />}
              >
                Email — {CONTACT.email}
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn-primary"
                sx={{ py: 1.5, fontWeight: 600, textTransform: 'none' }}
                startIcon={<PhoneAndroidRoundedIcon />}
              >
                WhatsApp — {CONTACT.phoneDisplay}
              </Button>
              <Button
                fullWidth
                variant="outlined"
                size="large"
                href={CONTACT.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn-ghost"
                sx={{ py: 1.5, fontWeight: 600, textTransform: 'none', borderWidth: 2 }}
                startIcon={<LinkedInIcon />}
              >
                LinkedIn — /in/kanishk-a
              </Button>
            </Stack>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3 }}>
              <Link href={`mailto:${CONTACT.email}`} color="inherit" underline="hover" fontWeight={600}>
                Prefer a mail link?
              </Link>
              {' · '}
              <Link href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" color="inherit" underline="hover" fontWeight={600}>
                Chat on WhatsApp
              </Link>
            </Typography>
          </Container>
        </AnimatedSection>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 4,
          px: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          bgcolor: sectionAltBg,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="body2" color="text.secondary" align="center" sx={{ lineHeight: 1.8, mb: 2 }}>
            <strong>Declaration:</strong> I hereby declare that the information provided above is true
            and correct to the best of my knowledge and belief.
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" align="center">
            © {new Date().getFullYear()} KANISHK A · Software Developer · {CONTACT.location}
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" align="center" sx={{ mt: 0.5 }}>
            Built with React &amp; Material UI
          </Typography>
        </Container>
      </Box>
    </>
  );
}
