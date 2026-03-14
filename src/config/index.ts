
export const SITE = {
  title: "Madhumitha Anand",
  tagline: "AI & Data Science Engineer",
  description:
    "Undergraduate portfolio of Madhumitha Anand — AI & Data Science engineering student passionate about building intelligent systems.",
  url: "https://madhumitha.dev", // ← change to your deployed URL
  email: "madhumithaa10a@gmail.com", // ← your email
  locale: "en-US",
};

export const HERO = {
  greeting: "Hello, I am",
  name: "MADHUMITHA ANAND",
  role: "AI & DS Engineering Undergraduate",
  bio: "Exploring intelligence through data, models, and experimentation. Currently pursuing a B.Tech in Artificial Intelligence and Data Science, with a strong interest in machine learning and intelligent systems. Interested in creating systems that learn, adapt, and solve real-world problems that focuses on growth, innovation, and meaningful technology.",
  availability: "Open to internships & full-time roles from 2025",
  cta: {
    primary: { label: "View My Work", href: "#projects" },
    secondary: { label: "Get In Touch", href: "#contact" },
  },
  // Path to your profile photo inside /public/
  avatar: "/avatar.jpg",
};

export const ABOUT = {
  paragraphs: [
    "I'm a final-year AI & Data Science undergraduate with a deep love for machine learning research, neural networks, and real-world AI applications. I believe the most impactful technology is the kind that solves genuine human problems.",
    "Outside academics, I enjoy experimenting with new ideas, improving my technical skills through projects, and learning more about data science through practical exploration. I actively look for opportunities to apply my knowledge in meaningful ways.",
  ],
  // Your quick stats
  stats: [
    { label: "GPA", value: "8.7 / 10" },      // ← update
    { label: "Projects", value: "10+" },
    { label: "Certifications", value: "15+" },
    { label: "Hackathons", value: "5" },
  ],
};

// ── SKILLS ──────────────────────────────────────────────────
// Group your technical skills into categories
export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "R", "SQL", "Java", "C++"],
  },
  {
    category: "ML / AI",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
    ],
  },
  {
    category: "Data & Analytics",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Power BI"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "AWS (S3, SageMaker)", "Jupyter", "FastAPI", "Streamlit"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
];

// ── PROJECTS ─────────────────────────────────────────────────
// Add as many projects as you want — they appear as cards
export const PROJECTS: Project[] = [
  {
    title: "Customer Behavior Modeling with K-Means Clustering",
    description:
      "Applied RFM analysis and K-Means clustering to segment customers based on purchasing behavior. Identified key customer groups from 50K+ records to enable data-driven marketing strategies.",
    tags: ["Python", "Pandas", "Scikit-learn", "RFM Analysis", "K-means", "Data Visualisation"],
    image: "/projects/medisense.jpg", // place image in /public/projects/
    github: "https://github.com/Madhumitha-Anand/CustomerSegmentation.git",
    demo: "",
    featured: true,
  },
  {
    title: "Mental Health Keyword Intensity Analyzer",
    description:
      "Developed an NLP-based tool to analyze text and measure intensity of mental-health-related keywords using normalized scoring. Implemented preprocessing and keyword analysis to generate instant, privacy-focused insights from user input text.",
    tags: ["Python", "NLP", "Regex", "Text Processing", "CLI"],
    image: "/projects/cropiq.jpg",
    github: "https://github.com/Madhumitha-Anand/MentalHealthKeywordAnalyzer.git",
    demo: "",
    featured: true,
  },
  {
    title: "Fake Job Posting Detector",
    description:
      "Developed an NLP-based machine learning application to classify job postings as real, fake, or uncertain using TF-IDF and Logistic Regression. Built an interactive Streamlit interface and addressed real-world challenges such as class imbalance and prediction uncertainty.",
    tags: ["Python", "NLP", "Machine Learning", "Logistic Regression", "Streamlit"],
    image: "https://fakejobdetectorproject.streamlit.app/",
    github: "https://github.com/Madhumitha-Anand/FakeJobDetector",
    demo: "",
    featured: false,
  },
 
];

// ── EXPERIENCE ───────────────────────────────────────────────
export const EXPERIENCE: Experience[] = [
  {
    role: "Data Science Intern",
    company: "Spectrum Softtech Solutions",               // ← update
    period: "Dec 2025 – Jan 2026",
    location: "Kochi, India",
    points: [
      "Completed a mini project on Customer Segmentation with Kaggle datasets.",
      "Implemented K-Means clustering to segment customers using unsupervised ML techniques.",
      "Performed data preprocessing, feature selection, and EDA to identify customer patterns",
    ],
  },
  {
    role: "Data Engineering Virtual Internship",
    company: "Forage",            // ← update
    period: "Jan 2025 – Mar 2025",
    location: "Remote",
    points: [
      "Assisted with ETL workflows and data processing under tight deadlines.",
      "Generated concise analytical reports to support data-driven decision-making.",
    ],
  },
  // ← Add more internships / jobs here
];

// ── EDUCATION ────────────────────────────────────────────────
export const EDUCATION: Education[] = [
  {
    degree: "B.Tech Artificial Intelligence & Data Science",
    institution: "Nehru Institute of Engineering and Technology",           // ← update
    university: "Anna University",              // ← update if needed
    period: "2023 – 2027",
    cgpa: "8.7 / 10",                           // ← update
    highlights: [
      "Relevant coursework: ML, Deep Learning, NLP, Computer Vision, Big Data Analytics",
      "Participated in technical workshops, coding events, or hackathons",
    ],
  },
  {
    degree: "Higher Secondary (Science — Computer Science)",
    institution: "Palghat Lions School",            // ← update
    university: "CBSE",
    period: "2020 – 2022",
    cgpa: "89%",                              // ← update
    highlights: [],
  },
];

// ── CERTIFICATIONS ───────────────────────────────────────────
export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google AI Essentials Specialization",
    issuer: "Google / Coursera",
    date: "2025",
    url: "https://coursera.org/share/ba0fce1a711848e089e6cf6c07301a9d",   // ← update or remove
  },
  {
    name: "Google Data Analytics",
    issuer: "Google / Coursera",
    date: "2025",
    url: "https://coursera.org/share/424f571be619234c93732e8534548ea0",
  },
  {
    name: "Google Business Intelligence",
    issuer: "Google / Coursera",
    date: "2024",
    url: "https://coursera.org/share/1af45bff95dfcef20ef1e9bfcda3e884",
  },
  {
    name: "Unsupervised Machine Learning",
    issuer: "IBM / Coursera",
    date: "2025",
    url: "",
  },
  {
    name: "Core Java",
    issuer: "LearnQuest / Coursera",
    date: "2025",
    url: "https://coursera.org/share/0d6f49a43f7d649c4e9e079276cb6850",
  },
  {
    name: "Python for Data Science, AI and Development",
    issuer: "IBM / Coursera",
    date: "2025",
    url: "https://coursera.org/share/e7a13cbf9b10f0c487004f92d196f788",
  }
  // ← Add more certifications
];

// ── SOCIAL / CONTACT ─────────────────────────────────────────
export const SOCIAL = {
  github: "https://github.com/Madhumitha-Anand",
  linkedin: "https://linkedin.com/in/madhumitha-anand",
  kaggle: "https://kaggle.com/madhumitha",
  email: "madhumitha@example.com",
};
// ── TypeScript types (do not edit below this line) ──────────
export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  university: string;
  period: string;
  cgpa: string;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}
