/**
 * Central portfolio data — customized for DVS Hitesh from his resume.
 * Update this file to change the portfolio content.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'DVS Hitesh',
  displayName: 'DVS Hitesh',
  firstName: 'HITESH',
  seriesTag: 'H SERIES',
  originalLabel: 'A HITESH ORIGINAL',
  role: 'Software Developer',
  tagline: ['Software Development', 'Generative AI', 'Web Technologies'],
  intro:
    'A 2026 B.Tech Electronics and Communication Engineering graduate with a foundation in programming, problem-solving, and software development. Interested in building reliable applications and AI-powered solutions using Java, Python, web technologies, and databases.',
  location: 'Tirupati, Andhra Pradesh, India',
  email: 'hiteshdindukurthi@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/hitesh-dvs',
    github: 'https://github.com/hitesh747',
  },
  resumePdf: '/assets/Hitesh_DVS_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet:
      '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of DVS Hitesh',
  },
  interests: ['Software Development', 'Generative AI', 'Cloud Computing'],
};

export const education = [
  {
    school: 'Annamacharya Institute of Technology and Sciences',
    place: 'Tirupati, India',
    degree: 'Bachelor of Technology — Electronics and Communication Engineering',
    period: '2022 – 2026',
    score: '2026 graduate',
  },
  {
    school: 'Sri Chaitanya Junior College',
    place: 'Tirupati, India',
    degree: 'Intermediate — Mathematics, Physics, Chemistry',
    period: '2020 – 2022',
    score: 'MPC',
  },
  {
    school: 'Little Angels High School',
    place: 'Tirupati, India',
    degree: 'Matriculation (CBSE)',
    period: '2020',
    score: 'CBSE',
  },
];

export const experience = [
  {
    company: 'SmartBridge, APSCHE',
    role: 'Generative AI Intern',
    place: 'Virtual / India',
    period: 'May 2025 – June 2025',
    points: [
      'Gained hands-on experience in LLM fine-tuning, prompt engineering, and AI model deployment.',
      'Worked with IBM watsonx.ai and Granite models to build AI-based applications.',
      'Developed an AI-powered tutoring platform that provides personalized learning support to students.',
    ],
  },
  {
    company: 'Infosys Springboard',
    role: 'Artificial Intelligence Intern',
    place: 'Virtual / India',
    period: 'August 2025 – September 2025',
    points: [
      'Contributed to problem-solving activities and real-world AI use cases under structured mentorship.',
      'Supported the development of basic AI/ML models and learned practices in data preprocessing and model evaluation.',
      'Collaborated in a virtual team-based environment, strengthening problem-solving and analytical skills.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'edututor-ai',
    title: 'EduTutor AI',
    year: '2025',
    genre: 'Generative AI • Education',
    logline: 'An AI-powered tutoring assistant designed to provide personalized learning support to students.',
    stack: ['Python', 'IBM watsonx.ai', 'Granite', 'Prompt Engineering'],
    build: [
      'Built an AI-powered personalized learning system that generates human-like responses to support students.',
      'Worked with IBM watsonx.ai and Granite models, applying prompt engineering and AI model deployment concepts.',
    ],
    features: [
      'AI-powered tutoring assistance',
      'Personalized learning support',
      'Natural-language responses',
      'IBM watsonx.ai and Granite model integration',
    ],
    metrics: [],
    github: 'https://github.com/hitesh747/EduTutor_AI',
    palette: { ...crimson },
    motif: 'shield',
  },
  {
    id: 'unesco-world-heritage',
    title: 'UNESCO World Heritage Analytics Dashboard',
    year: '2025',
    genre: 'Data Analytics • Visualization',
    logline: 'An interactive dashboard for exploring UNESCO World Heritage Sites and related data.',
    stack: ['Tableau', 'MS Excel', 'Data Visualization'],
    build: [
      'Developed an interactive Tableau dashboard to visualize UNESCO World Heritage Sites data.',
      'Implemented dynamic dashboards and geographic visualizations to explore site distributions, endangered-site status, and regional trends.',
    ],
    features: [
      'Interactive data dashboard',
      'Geographic visualizations',
      'Exploration of endangered-site status',
      'Regional trend analysis',
    ],
    metrics: [],
    github: 'https://github.com/hitesh747/World-Heritage-Treasures',
    palette: { ...ocean },
    motif: 'flow',
  },
  {
    id: 'emotune',
    title: 'EmoTune — Mood-Based Music Recommendation',
    year: '2025',
    genre: 'Machine Learning • Web Application',
    logline: 'A mood-based music recommendation application that uses facial emotion input to personalize music discovery.',
    stack: ['Python', 'Machine Learning', 'YouTube API', 'Frontend'],
    build: [
      'Developed a web application that detects facial emotion from photo or webcam input and curates music recommendations based on the detected mood.',
      'Integrated machine learning for emotion analysis and the YouTube API for dynamically generated playlists.',
      'Designed an interface for photo uploads, webcam detection, and personalized song browsing.',
    ],
    features: [
      'Photo and webcam input',
      'Facial emotion analysis',
      'Mood-based music recommendations',
      'YouTube API playlist integration',
      'Responsive song browsing interface',
    ],
    metrics: [],
    github: 'https://github.com/hitesh747/TuneMyMood',
    palette: { ...violet },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'blue-eyes-technology',
    title: 'Consolation Prize',
    org: 'TRISHNA 2K24',
    detail: 'Presented “Blue Eyes Technology,” showcasing human-computer interaction advancements.',
    laurel: 'Presentation',
  },
  {
    id: 'arts-and-crafts',
    title: 'First Prize',
    org: 'IETE Forum',
    detail: 'Created a Mosaic craft promoting Beautiful India.',
    laurel: 'Arts & Crafts',
  },
  {
    id: 'video-editing',
    title: 'First Place',
    org: 'AITS TPT',
    detail: 'Created a video about India’s space achievements for National Space Day.',
    laurel: 'Video Editing',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Udemy', name: 'The Complete Java Development Bootcamp' },
  { issuer: 'Google Cloud', name: 'Google Cloud Computing Foundations Certificate' },
  { issuer: 'LinkedIn Learning', name: 'Generative AI' },
  { issuer: 'Wipro TalentNext', name: 'Java Full Stack' },
  { issuer: 'Udemy', name: 'Cloud Computing on AWS' },
  { issuer: 'Scaler', name: 'Python Mastering the Essentials' },
  { issuer: 'Salesforce Trailhead', name: 'Agentforce Champion Rank' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Programming foundations',
    skills: [
      { name: 'Java', mono: 'Jv' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
    ],
  },
  {
    id: 'frontend',
    title: 'Web Technologies',
    subtitle: 'Building web interfaces',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Bootstrap', mono: 'Bs' },
    ],
  },
  {
    id: 'tools',
    title: 'Software & Version Control',
    subtitle: 'Development tools',
    skills: [
      { name: 'Visual Studio Code', mono: 'Vs' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'IntelliJ IDEA', mono: 'Ij' },
      { name: 'MATLAB', mono: 'Ml' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Querying and data storage',
    skills: [{ name: 'Oracle SQL', mono: 'Sql' }],
  },
  {
    id: 'ai',
    title: 'AI & Cloud',
    subtitle: 'Applied AI learning',
    skills: [
      { name: 'Generative AI', mono: 'AI' },
      { name: 'IBM watsonx.ai', mono: 'Wx' },
      { name: 'Machine Learning', mono: 'ML' },
      { name: 'Cloud Computing', mono: 'Cl' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: ['The Complete Java Development Bootcamp', 'Java Full Stack — Wipro TalentNext'],
  Python: ['EduTutor AI', 'EmoTune', 'Python Mastering the Essentials'],
  C: ['B.Tech coursework'],
  HTML: ['Java Full Stack — Wipro TalentNext'],
  CSS: ['Java Full Stack — Wipro TalentNext'],
  Bootstrap: ['Web technologies'],
  'Visual Studio Code': ['Software development projects'],
  GitHub: ['EduTutor AI', 'UNESCO World Heritage Analytics Dashboard', 'EmoTune'],
  'IntelliJ IDEA': ['Development tool'],
  MATLAB: ['Engineering coursework'],
  'Oracle SQL': ['Database skills'],
  'Generative AI': ['EduTutor AI', 'Generative AI internship'],
  'IBM watsonx.ai': ['EduTutor AI', 'SmartBridge internship'],
  'Machine Learning': ['EmoTune', 'Infosys Springboard internship'],
  'Cloud Computing': ['Google Cloud Computing Foundations Certificate', 'Cloud Computing on AWS'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020 – 2022',
    synopsis: 'School and intermediate education in Tirupati.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The School Years',
        description: 'Matriculation (CBSE) at Little Angels High School, Tirupati.',
        tags: ['CBSE', 'School'],
        runtime: '2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'MPC',
        description: 'Intermediate in Mathematics, Physics and Chemistry at Sri Chaitanya Junior College, Tirupati.',
        tags: ['Mathematics', 'Physics', 'Chemistry'],
        runtime: '2020 – 2022',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'The Engineer',
    period: '2022 – 2026',
    synopsis: 'B.Tech in Electronics and Communication Engineering at Annamacharya Institute of Technology and Sciences, Tirupati.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'B.Tech Journey',
        description: 'Studied Electronics and Communication Engineering, graduating in 2026.',
        tags: ['B.Tech', 'ECE'],
        runtime: '2022 – 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Building with AI',
    period: '2025',
    synopsis: 'Internship experience applying Generative AI and machine learning concepts.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The AI Tutor',
        description: 'Worked with IBM watsonx.ai and Granite models to develop an AI-powered tutoring assistant during the SmartBridge internship.',
        tags: ['Generative AI', 'IBM watsonx.ai', 'Granite'],
        runtime: 'May – June 2025',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Applied AI',
        description: 'Worked on AI/ML use cases, preprocessing concepts, and model evaluation during the Infosys Springboard internship.',
        tags: ['AI', 'Machine Learning', 'Data Preprocessing'],
        runtime: 'August – September 2025',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'The Originals',
    period: 'Project highlights',
    synopsis: 'Three projects spanning Generative AI, data visualization, and mood-based recommendations.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Tutor',
        description: 'EduTutor AI — a personalized AI tutoring assistant using Python and IBM watsonx.ai.',
        tags: ['Python', 'IBM watsonx.ai'],
        runtime: 'Project',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Analyst',
        description: 'UNESCO World Heritage Analytics Dashboard — interactive Tableau visualizations of heritage-site data.',
        tags: ['Tableau', 'MS Excel'],
        runtime: 'Project',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'The Music Curator',
        description: 'EmoTune — facial emotion-based music recommendations with machine learning and the YouTube API.',
        tags: ['Python', 'Machine Learning', 'YouTube API'],
        runtime: 'Project',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'Recognition & Learning',
    period: 'Ongoing',
    synopsis: 'Technical learning, certifications, and achievements across coding, presentations, arts, and video editing.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Achievements',
        description: 'Recognition in coding, a technical presentation, arts and crafts, and video editing.',
        tags: ['Coding', 'Presentation', 'Creative Work'],
        runtime: 'Achievements',
        palette: jade,
      },
      {
        code: 'S05 E02',
        title: 'The Next Chapter',
        description: 'Continuing to build skills in software development, Generative AI, and cloud computing.',
        tags: ['Software', 'AI', 'Cloud'],
        runtime: 'Now streaming',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'AI project', title: 'EduTutor AI', detail: 'Personalized tutoring with IBM watsonx.ai', palette: crimson },
  { label: 'Data analytics', title: 'UNESCO Dashboard', detail: 'Tableau visualizations and heritage-site insights', palette: ocean },
  { label: 'ML project', title: 'EmoTune', detail: 'Mood-based music recommendations', palette: violet },
  { label: 'Internship', title: 'Generative AI', detail: 'SmartBridge, APSCHE', palette: amber },
  { label: 'Internship', title: 'Artificial Intelligence', detail: 'Infosys Springboard', palette: jade },
  { label: 'Programming', title: 'Java & Python', detail: 'Programming languages from the resume', palette: crimson },
  { label: 'Web technologies', title: 'HTML • CSS • Bootstrap', detail: 'Frontend foundations', palette: ocean },
  { label: 'Certification', title: 'Google Cloud', detail: 'Cloud Computing Foundations', palette: violet },
  { label: 'Creative achievement', title: 'Video Editing', detail: 'First place at AITS TPT', palette: jade },
];

/** Slides for the "Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · ECE',
    lines: ['Annamacharya Institute of Technology and Sciences', 'Tirupati · 2026 graduate'],
    chips: ['Electronics & Communication Engineering'],
  },
  {
    kicker: 'Skills',
    title: 'Build with code.',
    lines: ['Java · Python · C', 'HTML · CSS · Bootstrap · Oracle SQL'],
    chips: ['Java', 'Python', 'HTML', 'CSS', 'Oracle SQL'],
  },
  {
    kicker: 'Internships',
    title: 'Learning through practice',
    lines: ['Generative AI Intern · SmartBridge, APSCHE', 'Artificial Intelligence Intern · Infosys Springboard'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['EduTutor AI — personalized AI tutoring', 'UNESCO World Heritage Analytics Dashboard', 'EmoTune — mood-based music recommendations'],
  },
  {
    kicker: 'Achievements',
    title: 'Key Moments',
    lines: ['Consolation prize — Blue Eyes Technology presentation', 'First prize — Arts & Crafts; first place — Video Editing'],
  },
  {
    kicker: 'Certified',
    title: 'Learning milestones',
    lines: ['Google Cloud Computing Foundations', 'Java Full Stack · Generative AI · AWS Cloud · Python'],
  },
  {
    kicker: 'Current mission',
    title: 'Build what matters.',
    lines: ['Software Development · Generative AI · Cloud Computing'],
  },
];

export type ProfileId = 'hitesh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'hitesh',
    name: 'Hitesh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Project highlights`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 portfolio highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
