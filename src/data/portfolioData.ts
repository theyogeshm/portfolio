import { Project, SkillCategory, Education, Certification, Extracurricular } from '../types';

export const PERSONAL_INFO = {
  name: 'Yogesh Kumar',
  degree: 'B.Tech Computer Science & Engineering',
  college: 'Delhi Technological University',
  duration: '2025 – 2029 (Expected) • Current Year: 2nd',
  headline: 'Building systems that see, detect, and decide.',
  subtitle: '2nd Year B.Tech CSE Student at Delhi Technological University (DTU), New Delhi. Passionate about Computer Vision, Machine Learning algorithms, and robust web applications.',
  location: 'New Delhi',
  phone: '9625722737',
  email: 'yogeshkumarlearner@gmail.com',
  github: 'https://github.com/theyogeshm',
  linkedin: 'https://linkedin.com/in/theyogeshm',
  status: 'Open to summer software engineering & computer vision research internships.',
  profileImage: './profile.jpg',
  architectureImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBgAsjZM_o8hyqACoX11wZY_czdyV6cZpM4FjHN9Rj2I6zOjql2qCVwa72uBuUxMiJKcTRMgZpZLQoy22oxnbCPfnbZwdrYLPbH7OM78OXSh6XdDyocsZ2MUtPZqjSDFlICFOZFDZpSg4c5xipUqWVWLzyugj3KavEXC5aLEQoewBWV6TutrCFTAEm3_IcWC3wtcEipnJ3xjCW1-0xEtAPkZcjcnZMhz4E26XWXZC43T99_812KCiCr',
};

export const ABOUT_TEXT = {
  p1: 'I am a 2nd year Computer Science & Engineering student at Delhi Technological University (DTU), New Delhi. My core interests center around machine learning algorithms, real-time computer vision, data structures & algorithms, and building clean web applications.',
  p2: 'Beyond software engineering, I actively compete in inter-college sports (Table Tennis, Football, Badminton), create technical & character sketch art, and produce AI-driven cinematic tech showcase reels.',
};

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'Delhi Technological University, New Delhi',
    year: '2025 – 2029 (Expected)',
    details: 'Current Year: 2nd. Core CS: Data Structures & Algorithms, OOPs (Basic).',
  },
  {
    degree: 'Class XII',
    institution: 'DBSE Board',
    year: '2024',
    grade: '91.2%',
    details: 'Senior Secondary Education.',
  },
  {
    degree: 'Class X',
    institution: 'CBSE Board',
    year: '2022',
    grade: '88.4%',
    details: 'Secondary Education.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Web',
    skills: ['C', 'C++', 'Python', 'HTML5', 'CSS3', 'Javascript', 'React.js'],
  },
  {
    title: 'Core',
    skills: ['Data Structure and Algorithms', 'OOPs(Basic)'],
  },
  {
    title: 'Machine Learning',
    skills: ['Supervised Learning (Regression, Classification)', 'Scikit-learn', 'NumPy', 'Pandas'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Microsoft Excel (VLOOKUP, Pivot Tables, Charts)', 'Git & GitHub', 'VS Code'],
  },
  {
    title: 'Frameworks',
    skills: ['Flask (Python)', 'YOLOv8 (Object Detection)', 'OpenCV'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'attendancehub',
    title: 'AttendanceHub',
    status: 'Deployed',
    image: './projects/attendancehub.png',
    demoUrl: 'https://www.attendancehub.me/',
    description:
      'Real-time subject-wise attendance tracking platform with bunk predictor, timetable engine & resource repository for university students.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Express'],
    longDescription:
      'Engineered AttendanceHub, a comprehensive attendance and academic management platform tailored for university students. Features real-time attendance tracking with a Bunk Predictor calculating exact "Safe to Bunk" and "Must Attend" targets to maintain DTU\'s 75% threshold across Theory, Lab, and Tutorial components.',
    keyFeatures: [
      'Built a real-time attendance tracking platform with subject-wise monitoring and 75% threshold tracking',
      'Developed a Bunk Predictor to calculate "Safe to Bunk" and "Must Attend" lectures',
      'Implemented What-If Analytics to simulate attendance percentages based on future attendance',
      'Built a multi-semester timetable system with batch filtering, current-class highlighting, and offline support',
    ],
    metrics: [
      { label: 'Database & Auth', value: 'Supabase PostgreSQL' },
      { label: 'Frontend', value: 'React + TypeScript' },
      { label: 'Threshold Engine', value: 'Real-Time 75%' },
    ],
    architectureOverview:
      'React Client → Motion UI Engine → Supabase Auth & PostgreSQL → Express REST Middleware → LocalStorage Offline Fallback',
  },
  {
    id: 'formsaathi',
    title: 'FormSaathi',
    status: 'Deployed',
    image: './projects/formsaathi.png',
    demoUrl: 'https://formsaathi.onrender.com/',
    description:
      'An AI-powered banking platform that simplifies complex banking form fill-ups in under 30 seconds using Gemini Vision AI and multilingual voice assistance.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Gemini AI', 'Express'],
    longDescription:
      'FormSaathi is designed to bridge the digital and linguistic divide in financial services. It automates repetitive, error-prone bank documentation by extracting user details directly from uploaded identity documents (Aadhaar & PAN) and guiding users via regional voice prompts in under 30 seconds.',
    keyFeatures: [
      'Built an AI-powered banking platform reducing form-filling time to under 30 seconds',
      'Integrated Gemini Vision AI to extract Aadhaar/PAN data and auto-fill bank forms',
      'Implemented voice-assisted form filling supporting 7+ regional Indian languages',
      'Developed PDF generation, digital signatures, and QR verification for bank submissions',
    ],
    metrics: [
      { label: 'Completion Time', value: '30 Seconds' },
      { label: 'AI Scanner', value: 'Gemini Vision AI' },
      { label: 'Voice Support', value: '7+ Indian Languages' },
    ],
    architectureOverview:
      'React 19 UI → Web Speech / Voice Engine → Gemini Vision AI API → Zero-Rejection Validator → Client-side PDF & QR Code Generator',
  },
  {
    id: 'campusloot',
    title: 'CampusLoot',
    status: 'Deployed',
    image: './projects/campusloot.png',
    demoUrl: 'https://campusloot-1.onrender.com/',
    description:
      'A centralized platform for students to discover and track internships, scholarships, and hackathons in one place with fast filtering and search.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    longDescription:
      'Built a centralized platform for students to discover and track internships, scholarships, and hackathons in one place instead of relying on scattered WhatsApp forwards and notice-board PDFs. Designed a MongoDB schema to store and categorize opportunities by type, deadline, and eligibility.',
    keyFeatures: [
      'Built a platform to discover and track internships, scholarships, and hackathons',
      'Designed MongoDB schemas for type, deadline, and eligibility-based filtering',
      'Developed scalable React + TypeScript frontend with type-safe components',
      'Built REST APIs using Node.js/Express for opportunity CRUD operations',
    ],
    metrics: [
      { label: 'Database', value: 'MongoDB Schema' },
      { label: 'Frontend', value: 'React + TypeScript' },
      { label: 'Backend API', value: 'Node.js / Express' },
    ],
    architectureOverview:
      'React Client UI → Express/Node.js REST API → MongoDB Aggregation Pipeline → Filtered Opportunities Feed',
  },
  {
    id: 'atms',
    title: 'Adaptive Traffic Management System (ATMS)',
    status: 'Deployed',
    image: './projects/atms.png',
    repoUrl: 'https://github.com/theyogeshm/TrafficControl.git',
    description:
      'Built an adaptive traffic management system, combining computer vision, machine learning, and real-time traffic simulation.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    longDescription:
      'Built an adaptive traffic management system, combining computer vision, machine learning, and real-time traffic simulation. Used YOLOv8 for vehicle detection and traffic data collection to analyze changing traffic conditions at intersections. Developed a Random Forest model to predict traffic conditions and dynamically optimize traffic signal timing.',
    keyFeatures: [
      'Built an adaptive traffic management system, combining computer vision, machine learning, and real-time traffic simulation',
      'Used YOLOv8 for vehicle detection and traffic data collection to analyze changing traffic conditions at intersections',
      'Developed a Random Forest model to predict traffic conditions and dynamically optimize traffic signal timing',
      'Integrated the system with Flask and built a realistic real-time traffic simulation that responds dynamically to traffic density',
    ],
    metrics: [
      { label: 'Detection', value: 'YOLOv8 Vision' },
      { label: 'Optimizer', value: 'Random Forest' },
      { label: 'Backend', value: 'Flask Python API' },
    ],
    architectureOverview:
      'Camera Feed → YOLOv8 Detector → Random Forest Signal Model → Flask Traffic Simulator',
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: 'Machine Learning – Supervised Learning',
    issuer: 'Coursera',
    detail: 'Machine Learning – Supervised Learning (Coursera)',
  },
  {
    title: 'Data Structures & Algorithms – Problem Solving with C/C++',
    issuer: 'LeetCode',
    detail: 'Problem Solving with C/C++ (LeetCode 300+ problems solved)',
  },
  {
    title: 'Excel for Data Analysis',
    issuer: 'Professional Certification',
    detail: 'Advanced Formulas, Pivot Tables & Dashboards',
  },
  {
    title: 'Computer Vision with YOLOv8',
    issuer: 'Applied ML',
    detail: 'Object Detection & Real-Time Inference',
  },
];

export const EXTRACURRICULAR_DATA: Extracurricular[] = [
  {
    category: 'Sports',
    description: 'Table Tennis, Football, Badminton – active participant in inter-college tournaments.',
  },
  {
    category: 'Visual Arts',
    description: 'Sketch & drawing enthusiast with a focus on character art and technical illustration.',
  },
  {
    category: 'Open Source',
    description: 'Maintains personal GitHub with project code and ML assignment notebooks.',
  },
  {
    category: 'Content Creation',
    description: 'Produced a cinematic tech showcase reel for the ATMS project using AI video tools.',
  },
];
