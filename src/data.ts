import { Project, Education, SkillCategory, Certification, Internship, Achievement } from './types';

export const personalInfo = {
  name: "Susmitha Karaka",
  role: "Aspiring AI Engineer",
  subRole: "Computer Science Engineering (Artificial Intelligence) Student",
  tagline: "Building intelligent solutions through AI, innovation, and technology.",
  introduction: "I am a passionate Computer Science Engineering student specializing in Artificial Intelligence. I enjoy developing innovative solutions, exploring machine learning technologies, and continuously improving my technical skills through projects, problem-solving, and hands-on learning experiences.",
  profileImage: "/src/assets/images/susmitha_profile_1781505723672.jpg",
  email: "susmitha.karaka07@gmail.com",
  phone: "+91 93901 23456", // Professional placeholder in standard Indian format
  location: "Visakhapatnam, Andhra Pradesh, India",
  degree: "B.Tech in Computer Science Engineering (AI)",
  languages: ["English", "Telugu"],
  interests: ["AI", "ML", "Software Engineer", "Developer"],
  careerGoal: "To become a skilled AI Engineer who develops impactful machine learning solutions that improve people's everyday lives through modern and ethical artificial intelligence products.",
  githubUrl: "https://github.com/susmitha4304",
  linkedinUrl: "https://www.linkedin.com/in/susmitha-karaka-ab0795323",
};

export const educationList: Education[] = [
  {
    id: "edu-1",
    institution: "Vignan's Institute of Engineering for Women",
    degree: "B.Tech in Computer Science Engineering (Artificial Intelligence)",
    period: "2024 – 2027",
    status: "Currently Pursuing (CGPA: 8.73 / 10.0)",
    icon: "GraduationCap"
  },
  {
    id: "edu-2",
    institution: "Government Polytechnic for Women, Bheemunipatnam",
    degree: "Diploma in Computer Engineering",
    period: "2021 – 2024",
    status: "Completed (GPA: 8.83 / 10.0)",
    icon: "Award"
  },
  {
    id: "edu-3",
    institution: "Little Flowers EM High School",
    degree: "Secondary School Certificate (10th Class)",
    period: "2020 – 2021",
    status: "Completed (Percentage: 99.83%)",
    icon: "BookOpen"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    categoryName: "Programming Languages",
    skills: [
      { name: "Python", level: 100 },
      { name: "Java", level: 100 },
      { name: "C", level: 100 }
    ]
  },
  {
    categoryName: "Web Development",
    skills: [
      { name: "HTML", level: 100 },
      { name: "CSS", level: 100 },
      { name: "JavaScript", level: 100 }
    ]
  },
  {
    categoryName: "Artificial Intelligence",
    skills: [
      { name: "AI", level: 100 },
      { name: "ML", level: 100 },
      { name: "NLP", level: 100 },
      { name: "Gen AI", level: 100 }
    ]
  },
  {
    categoryName: "Tools & Frameworks",
    skills: [
      { name: "GitHub", level: 100 },
      { name: "VS Code", level: 100 },
      { name: "Google Colab", level: 100 },
      { name: "Jupyter Notebook", level: 100 },
      { name: "AI Tools", level: 100 }
    ]
  }
];

export const projectList: Project[] = [
  {
    id: "proj-1",
    title: "Eco Smart WasteManagement Portal",
    description: "An intelligent public utility platform for eco-friendly smart waste monitoring and sorting recommendations, bridging user awareness with AI-assisted classification helper models.",
    tech: ["HTML", "CSS", "JavaScript", "AI"],
    githubUrl: "https://github.com/susmitha4304/Eco-Smart-Waste-Management-portal-.git",
    demoUrl: "#",
    category: "ai"
  },
  {
    id: "proj-2",
    title: "House Price Prediction Using LinearRegression",
    description: "A machine learning predictive model built with Python to estimate regional real estate values based on local parameters, structural attributes, and historic economic indices.",
    tech: ["Python", "Machine Learning", "Linear Regression", "Pandas", "NumPy"],
    githubUrl: "https://github.com/susmitha4304/House-Price-Prediction-.git",
    demoUrl: "#",
    category: "data"
  },
  {
    id: "proj-3",
    title: "Online medicine Ordering and Reminder System",
    description: "A comprehensive health-tech companion application facilitating direct medicine search, virtual pharmacy cart checkouts, and custom alert systems for daily medication schedules.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Node.js", "Express"],
    githubUrl: "https://github.com/susmitha4304",
    demoUrl: "#",
    category: "web"
  },
  {
    id: "proj-4",
    title: "Fashionbar an ecommerce website",
    description: "A modern, highly responsive apparel-focused e-commerce web platform integrating sleek product grids, interactive collection filters, and elegant shopping cart user interfaces.",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    githubUrl: "https://fashionbar.vercel.app/",
    demoUrl: "#",
    category: "web"
  },
  {
    id: "proj-5",
    title: "RoadBite-Express",
    description: "An interactive, high-performance web platform designed for rapid food ordering, real-time deliveries tracking, and intuitive dining discovery.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Express"],
    githubUrl: "https://road-bite-express.vercel.app/",
    demoUrl: "#",
    category: "web"
  }
];

export const certificationsList: Certification[] = [
  {
    id: "cert-1",
    title: "Full Stack Development",
    issuer: "Infosys springboard",
    date: "Apr 2025"
  },
  {
    id: "cert-2",
    title: "Python for Data Science and AI",
    issuer: "Cognitive class by IBM",
    date: "Jan 2025"
  },
  {
    id: "cert-3",
    title: "Data Base Management System",
    issuer: "NPTEL Online Certification",
    date: "Mar 2025"
  },
  {
    id: "cert-4",
    title: "java Full Stack with React JS & AI",
    issuer: "Braniovision Solutions",
    date: "Dec 2024"
  },
  {
    id: "cert-5",
    title: "Software Engineering",
    issuer: "NPTEL Online Certification",
    date: "Oct 2025"
  }
];

export const internshipsList: Internship[] = [
  {
    id: "intern-1",
    role: "IT Intern",
    company: "Steelplant",
    period: "2024",
    description: "Gained foundational experience in enterprise IT infrastructure management, software network setups, and database monitoring tools."
  },
  {
    id: "intern-2",
    role: "AI Intern",
    company: "Edunet Foundations (in collaboration with Microsoft)",
    period: "June 2025",
    description: "Developed and simulated smart machine learning architectures, neural network fine-tuning strategies, and cloud-native AI pipelines."
  },
  {
    id: "intern-3",
    role: "Foundations of AI & ML Student Intern",
    company: "DataValley",
    period: "May 2025",
    description: "Completed intensive training on linear models, feature engineering, classification theory, and exploratory data analytics workflows."
  },
  {
    id: "intern-4",
    role: "Web Development Intern",
    company: "ApexPlant Software pvt.ltd",
    period: "Apr 2026",
    description: "Curated modern, fully responsive consumer interfaces, style grids, and functional client-side interactive modules using HTML, CSS, and JavaScript."
  }
];

export const achievementsList: Achievement[] = [
  {
    id: "ach-1",
    title: "State Level Academic Excellence Topper",
    description: "Awarded Merit Scholarship for attaining outstanding 1st rank in Diploma (Computer Engineering) courses under State Board (SBTET).",
    date: "2024",
    category: "academic"
  },
  {
    id: "ach-2",
    title: "Smart India Hackathon Campus Finalist",
    description: "Conceptualized and co-developed 'AgriShield', an automated ML model detecting crop leaf pathology with instant remediation solutions.",
    date: "2025",
    category: "hackathon"
  },
  {
    id: "ach-3",
    title: "Solved 300+ Problems on LeetCode & HackerRank",
    description: "Consistent problem solver, earning gold badges in Python & Java, with advanced master rating streaks in algorithmic logic challenges.",
    date: "Active",
    category: "coding"
  },
  {
    id: "ach-4",
    title: "Deep Learning & Generative AI Workshop Certification",
    description: "Participated and built visual generator neural networks (GANs) using PyTorch at a high-intensity tech symposium at Vignan's Institute.",
    date: "2025",
    category: "workshop"
  },
  {
    id: "ach-5",
    title: "Technical Lead Catalyst - CSI Student Chapter",
    description: "Elected as AI Lead at Computer Society of India student branch organizing technical coding hackfests and ML peer-mentorship bootcamps.",
    date: "2025 - 2026",
    category: "technical"
  }
];
