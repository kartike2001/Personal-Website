import type { SkillCategory, ExperienceEntry, ProjectEntry, LeadershipEntry, CertEntry } from '../types'

export const subtitles = [
  'Head Teaching Assistant.',
  'Full Stack Developer.',
  'ML/AI Developer.',
  'Resident Advisor.',
  'Peer Mentor.',
]

export const awards = [
  'Matthew Grappone Memorial Award',
  'Professor Charles M. Fogel Scholarship',
  'David M. Benenson Memorial Scholarship',
  '2022 Leaders in Excellence Award',
  '2022 Emerging Student Leader – Nominee',
  '2023 Innovative Student Leader Award',
]

export const skillCategories: SkillCategory[] = [
  {
    label: 'Programming Languages',
    items: [
      { name: 'Java',       key: 'Java',       info: 'Algorithms and Complexity CSE331, Gamifying Learning' },
      { name: 'Scala',      key: 'Scala',      info: 'Intro to CS II CSE116, Head Teaching Assistant' },
      { name: 'JavaScript', key: 'Javascript', info: 'Intro to CS I CSE115, UBay, NEXT-LEVEL' },
      { name: 'Python',     key: 'Python',     info: 'Stock Predictor, Digit Classifier, Planet Explorer, Face Detection, ML Optimization, NEXT-LEVEL, UBay' },
      { name: 'C',          key: 'C',          info: 'Systems Programming CSE220' },
      { name: 'Go / Golang',key: 'Golang',     info: 'Distributed Systems CSE486, Qarik Group' },
      { name: 'HTML / CSS', key: 'HTML/CSS',   info: 'NEXT-LEVEL, UBay, Personal Portfolio' },
    ],
  },
  {
    label: 'Web Development',
    items: [
      { name: 'ReactJS',   key: 'ReactJS',   info: 'UBay, Personal Portfolio' },
      { name: 'FastAPI',   key: 'FastAPI',   info: 'UBay' },
      { name: 'Flask',     key: 'Flask',     info: 'NEXT-LEVEL' },
      { name: 'Gin',       key: 'Gin',       info: 'Qarik Group' },
      { name: 'Bootstrap', key: 'Bootstrap', info: 'UBay, Qarik Group' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'PostgreSQL', key: 'PostgreSQL', info: 'UBay, Qarik Group' },
      { name: 'MongoDB',    key: 'MongoDB',    info: 'NEXT-LEVEL' },
      { name: 'MySQL',      key: 'MySQL' },
    ],
  },
  {
    label: 'Dev Tools & Version Control',
    items: [
      { name: 'Git',        key: 'Git',        info: 'All projects and work experiences' },
      { name: 'Docker',     key: 'Docker',     info: 'NEXT-LEVEL, UBay, Qarik Group' },
      { name: 'Linux / Unix', key: 'Linux/Unix', info: 'Systems Programming CSE220, CSE411, Head TA' },
      { name: 'Postman',    key: 'Postman',    info: 'NEXT-LEVEL, UBay, Qarik Group' },
    ],
  },
  {
    label: 'CS Concepts',
    items: [
      { name: 'Machine Learning',    key: 'Machine Learning Algorithms', info: 'Stock Predictor, ML Optimization, Digit Classifier' },
      { name: 'Deep Learning',       key: 'Deep Learning',               info: 'Handwritten Digit Classifier' },
      { name: 'Reinforcement Learning', key: 'Reinforcement Learning',   info: 'Intergalactic Planet Explorer' },
      { name: 'Computer Vision',     key: 'Computer Vision',             info: 'Computer Vision CSE473, Face Detection and Clustering' },
      { name: 'Data Structures',     key: 'Data Structures',             info: 'Head Teaching Assistant' },
      { name: 'Algorithms',          key: 'Algorithms',                  info: 'Algorithms and Complexity CSE331, Head TA' },
      { name: 'Distributed Systems', key: 'Distributed Systems',         info: 'Distributed Systems CSE486' },
    ],
  },
  {
    label: 'Soft Skills',
    items: [
      { name: 'Peer Mentoring',    key: 'Peer Mentoring' },
      { name: 'Leadership',        key: 'Leadership' },
      { name: 'Community Outreach',key: 'Community Outreach' },
      { name: 'Networking',        key: 'Networking' },
    ],
  },
  {
    label: 'Languages',
    items: [
      { name: 'English (Full Professional)',      key: 'English' },
      { name: 'Hindi (Native / Bilingual)',       key: 'Hindi' },
      { name: 'Bengali (Professional Working)',   key: 'Bengali' },
      { name: 'German (Limited Working)',         key: 'German' },
    ],
  },
]

export const experience: ExperienceEntry[] = [
  {
    title: 'Head Teaching Assistant — Data Structures & Algorithms',
    org: 'University at Buffalo',
    period: 'Aug 2022 – May 2024',
    skills: ['Java', 'Scala', 'Python', 'Data Structures', 'Algorithms', 'Linux/Unix'],
    subsections: [
      {
        bullets: [
          'Restructured all programming assignments from Scala to Java and authored documentation, ensuring clarity and curriculum relevance for students',
          'Developed an automated testing system using Python and Java, integrating Makefile build automation and JSON for test result storage',
          'Led 10 hours of weekly tutorials for 40+ students, contributing to an overall improvement in class average',
          'Graded assignments for 300 students, upholding academic standards and ensuring timely feedback',
        ],
      },
    ],
  },
  {
    title: 'Full Stack Web Developer — NEXT-LEVEL Leadership Conference',
    org: 'University at Buffalo',
    period: 'Aug 2022 – May 2024',
    github: 'https://github.com/kartike2001/NextLevel',
    skills: ['Bootstrap', 'Python', 'Javascript', 'PostgreSQL', 'Git', 'MongoDB', 'HTML/CSS', 'Docker', 'Flask', 'Postman'],
    subsections: [
      {
        heading: 'Technical',
        bullets: [
          'Engineered a Python-based TCP handler integrating MongoDB; developed ADA-compliant HTML/CSS/JS using Agile methodologies',
          'Reengineered the entire backend to Flask, streamlining codebase handoff to a sophomore colleague',
          'Automated team point allocation through a login and registration system for 100+ users',
          'Leveraged AJAX polling to create a live scoreboard, reducing manual workload by ~90%',
        ],
      },
      {
        heading: 'Organization',
        bullets: [
          'Coordinated a team of 4 to plan and execute the Next Level Leadership Mentoring Experience for 60+ UB student leaders',
          'Developed a gamified conference format with interactive activities and guest mentors',
          'Achieved 90%+ "excellent" ratings in post-event surveys',
        ],
      },
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'Qarik Group',
    period: 'Jun 2022 – Aug 2022',
    skills: ['ReactJS', 'Docker', 'Golang', 'Gin', 'HTML/CSS', 'PostgreSQL', 'Bootstrap', 'Postman'],
    subsections: [
      {
        bullets: [
          'Engineered the UI/UX for Genesis UI — a Docker-based versatile deployment framework for Cloud Foundry across multiple infrastructure clouds',
          'Worked within a team of 4 to streamline deployment, scaling, and upgrading of systems across multiple clouds',
          'Added ReactJS functionalities to improve accessibility, and authored a user-friendly deployment guide',
          'Built backend APIs in Go/Gin to store and update deployment data in PostgreSQL; integrated GitHub API for seamless data sync',
        ],
      },
    ],
  },
]

export const projects: ProjectEntry[] = [
  {
    title: 'UBay — Ecommerce Platform for University at Buffalo',
    github: 'https://github.com/kartike2001/312_hooligans',
    skills: ['ReactJS', 'FastAPI', 'Python', 'Javascript', 'PostgreSQL', 'Git', 'HTML/CSS', 'Bootstrap', 'Postman'],
    bullets: [
      'Led a team of 4 to build a full ecommerce platform using React.js, FastAPI, Sass, and PostgreSQL',
      'Designed a secure auth system using bcrypt and session cookies',
      'Devised a real-time auction feature using WebSockets with live bid tracking',
    ],
  },
  {
    title: 'Stock Predictor',
    github: 'https://github.com/kartike2001/StockPricePredictor',
    skills: ['Python', 'Machine Learning Algorithms', 'Git'],
    bullets: [
      'Implemented a Random Forest Regressor using the yfinance library for Yahoo Finance data',
      'Optimized via GridSearchCV hyperparameter tuning across estimator count, max features, and min sample splits',
      'Achieved MAE 0.975, MSE 1.763, RMSE 1.328 on closing price prediction',
    ],
  },
  {
    title: 'Face Detection and Clustering',
    skills: ['Python', 'Git', 'Computer Vision', 'Machine Learning Algorithms'],
    bullets: [
      'Built an end-to-end Python app using PyTorch and face_recognition for accurate face detection and clustering',
      'Computed 128-dimensional face encodings and implemented K-Means clustering from scratch',
      'Accelerated inference by offloading tensor operations to GPU when available',
    ],
  },
  {
    title: 'Intergalactic Planet Explorer — Reinforcement Learning',
    github: 'https://github.com/kartike2001/IntergalacticPlanetExplorer',
    skills: ['Python', 'Reinforcement Learning', 'Git', 'Machine Learning Algorithms'],
    bullets: [
      'Built a grid-based gym.Env environment subclass for OpenAI Gym in Python',
      'Implemented both SARSA and Q-learning with Q-tables for state-action value estimation',
      'Conducted extensive hyperparameter analysis tuning discount factor, epsilon decay, and episode count',
    ],
  },
  {
    title: 'Machine Learning Optimization',
    github: 'https://github.com/kartike2001/MachineLearningOptimization',
    skills: ['Python', 'Machine Learning Algorithms', 'Git'],
    bullets: [
      'Built a model to predict flight pricing across a 300,153-entry dataset using logistic regression from scratch',
      'Achieved 95.52% peak accuracy via hyperparameter optimization of learning rate and max iterations',
      'Applied OLS and ridge regression to improve stability, handle multicollinearity, and reduce overfitting',
    ],
  },
  {
    title: 'Handwritten Digit Classifier',
    github: 'https://github.com/kartike2001/MNIST',
    skills: ['Python', 'Deep Learning', 'Git', 'Machine Learning Algorithms'],
    bullets: [
      'Built a CNN in PyTorch achieving 99% validation accuracy on the MNIST dataset',
      'Applied data augmentation (random rotation) and the Adadelta optimizer with learning rate scheduling',
      'Used early stopping to prevent overfitting — halted training when validation loss plateaued over 4 epochs',
    ],
  },
  {
    title: 'Gamifying Learning — UB Hackathon',
    github: 'https://github.com/kartike2001/Hackathon',
    skills: ['Java', 'Git'],
    bullets: [
      'Composed a Java-based quiz game on NetBeans to teach world capitals',
      'Players receive 5 random countries and earn 5 points per correct answer',
    ],
  },
]

export const leadership: LeadershipEntry[] = [
  {
    title: 'Resident Advisor',
    org: 'University at Buffalo',
    period: 'Aug 2022 – May 2024',
    skills: ['Leadership', 'Management', 'Communication', 'Event Planning'],
    bullets: [
      'Managed all administrative tasks including budgeting, maintenance requests, and resident check-ins for a 200+ student dormitory',
      'Initiated and ran 15+ student engagement programs each semester, boosting community integration and career readiness for 23 first-year students',
    ],
  },
  {
    title: 'Student Engagement Ambassador',
    org: 'University at Buffalo',
    period: 'Aug 2021 – Aug 2023',
    skills: ['Leadership', 'Mentoring', 'Public Speaking', 'Event Planning'],
    bullets: [
      'Mentored 12–20 students per semester, fostering personal and academic development and increasing campus engagement',
      'Represented the student body as a panelist alongside the VP of UB in alumni engagements',
      'Orchestrated multiple university-wide events, increasing overall participation',
    ],
  },
  {
    title: 'CS & Engineering Peer Mentor',
    org: 'University at Buffalo',
    period: 'Sep 2022 – Jan 2023',
    skills: ['Mentoring', 'Communication', 'Problem-Solving'],
    bullets: [
      'Actively mentored 2 first-year students through their transition into the CS&E program',
      'Provided comprehensive guidance on course selection, significantly improving mentees\' first-semester performance',
    ],
  },
  {
    title: 'Turnover Assistant — Student Project Manager',
    org: 'University at Buffalo',
    period: 'May 2021 – Jun 2022',
    skills: ['Project Management', 'Collaboration', 'Organization'],
    bullets: [
      'Collaborated with 5 Complex Directors and Campus Living Professionals for seamless apartment turnover',
      'Coordinated 10+ third-party contractors and maintained key checks and work orders for 800+ apartments',
    ],
  },
  {
    title: 'Athlete Tutor',
    org: 'University at Buffalo',
    period: 'Nov 2021 – May 2022',
    skills: ['Tutoring', 'Communication', 'Adaptability'],
    bullets: [
      'Provided one-on-one tutoring to 10 student-athletes in CS fundamentals and Calculus',
      'Achieved a 100% pass rate among all tutored students through tailored teaching techniques',
    ],
  },
]

export const certifications: CertEntry[] = [
  { label: 'UB Experience Certificate', href: 'https://drive.google.com/file/d/19tjWEOranVqm1eQJ1FXQREX1KvuJcZUb/view' },
  { label: 'UB Leadership Certificate', href: 'https://drive.google.com/file/d/1bQPW4Nzwhba7RjZ5bdwlih86ZDZcgTE7/view' },
  { label: 'edX: Programming for Everybody (Python)', href: 'https://courses.edx.org/certificates/914ec74a35564b939b6da4f2bdff3d6f' },
  { label: 'edX: C Programming — Getting Started', href: 'https://courses.edx.org/certificates/9c302c2094664b85bb123fa074fdea5c' },
  { label: 'UB Here to Career: Collaborator', href: 'https://www.credly.com/badges/644879a2-fc24-416d-8511-644f82eceeaa' },
  { label: 'UB Here to Career: Change Agent', href: 'https://www.credly.com/badges/ad770cc2-e89c-41b9-a5b8-d86c8b17d652' },
  { label: 'UB Here to Career: Growth Mindset', href: 'https://www.credly.com/badges/da5e1574-12a7-4cee-a67c-dfd7fa3c50d3' },
  { label: 'UB Here to Career: Achievement', href: 'https://www.credly.com/badges/6b1ecdce-4548-4727-9cb4-dfe5189ceadf' },
]
