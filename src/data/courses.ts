export interface Course {
  id: string;
  title: string;
  duration: string;
  category: string;
  description: string;
  detailedDescription?: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  outcomes: string[];
  icon: 'computer' | 'keyboard' | 'calculator' | 'academic-cap' | 'certificate' | 'code';
  featured: boolean;
  slug: string;
  syllabus?: string[];
  requirements?: string[];
  faqs?: { question: string; answer: string }[];
  startDate?: string;
  schedule?: string;
  instructor?: string;
  level?: string;
  language?: string;
  certificate?: boolean;
  maxStudents?: number;
  enrolled?: number;
  videoId?: string;
}

export const courses: Course[] = [
  {
    id: "ms-cit",
    title: "MS-CIT",
    duration: "2-3 months",
    category: "Computer Basics",
    description: "Maharashtra State Certificate in Information Technology - a comprehensive IT literacy course recognized by the Government of Maharashtra.",
    detailedDescription: "The Maharashtra State Certificate in Information Technology (MS-CIT) is an IT literacy course initiated by Maharashtra Knowledge Corporation Ltd (MKCL) in 2001. It is the most popular IT literacy course in Maharashtra, with over 10 million learners becoming IT literate. The course equips learners with essential digital skills for personal, professional, and social life in the 21st century, including AI-powered productivity tools, job-readiness skills, and digital financial literacy. It aims to bridge the digital divide by promoting IT awareness, literacy, functionality, and applicability.",
    price: "₹4,500.00",
    originalPrice: "₹4,700.00",
    discount: "4% off",
    outcomes: [
      "Proficiency in Microsoft Office applications (Word, Excel, PowerPoint)",
      "Skills in internet usage, email management, and digital financial services",
      "Understanding of computer fundamentals and operating systems",
      "Knowledge of AI-powered tools for productivity and job-readiness",
      "Government-recognized certification for enhanced career opportunities",
      "Ability to perform online tasks like applying for certificates and using digital services"
    ],
    icon: "computer",
    featured: true,
    slug: "/courses/ms-cit",
    syllabus: [
      "Introduction to Information Technology",
      "Computer Fundamentals and Operating Systems (Windows)",
      "MS Word 2007/2010 for Documentation",
      "MS Excel 2007/2010 for Spreadsheets",
      "MS PowerPoint 2007/2010 for Presentations",
      "Internet, Email, and Web Browsing",
      "Digital Financial Services and Online Transactions",
      "AI-Powered Productivity Tools",
      "Digital Citizenship and Green Computing",
      "21st Century Job-Readiness Skills"
    ],
    requirements: [
      "Keen desire to learn Information Technology",
      "Preferably 10th standard pass (not mandatory)",
      "Access to a computer with internet for online mode",
      "Basic understanding of English or Marathi"
    ],
    faqs: [
      {
        question: "Is MS-CIT recognized by the government?",
        answer: "Yes, it is recognized by the Government of Maharashtra and jointly certified by MKCL and Maharashtra State Board of Technical Education (MSBTE)."
      },
      {
        question: "What is the course duration?",
        answer: "The course typically takes 2-3 months, with 2 hours daily (1 hour theory, 1 hour practical) or flexible schedules for school students."
      },
      {
        question: "What are the fees for MS-CIT?",
        answer: "For MMRDA region: ₹4,500 (single installment) or ₹4,700 (two installments of ₹2,350 each). For rest of Maharashtra: ₹4,000 (single installment) or ₹4,200 (two installments of ₹2,100 each)."
      },
      {
        question: "What is the exam pattern?",
        answer: "The final exam is conducted online by MSBTE, requiring a minimum of 20 out of 50 marks to pass. It includes internal assessments and a final examination."
      },
      {
        question: "Can I take MS-CIT online?",
        answer: "Yes, MS-CIT Online allows learning from home using MKCL’s ERA Learning Management System. A computer with an active internet connection (4G or broadband) is required."
      },
      {
        question: "What materials are provided?",
        answer: "Learners receive a physical MS-CIT book, access to eLearning content via MKCL’s ERA LMS, and a multimedia tutor CD."
      },
      {
        question: "What are the career opportunities after MS-CIT?",
        answer: "Graduates can pursue roles in IT consulting, banking, data analytics, teaching, and government jobs, with starting salaries ranging from ₹30,000 to ₹60,000."
      }
    ],
    startDate: "Rolling admissions",
    schedule: "2 hours daily (1 hour theory, 1 hour practical); flexible for school students",
    instructor: "MKCL Certified Trainers",
    level: "Beginner",
    language: "English, Marathi",
    certificate: true,
    maxStudents: 25,
    enrolled: 18,
    videoId: "myoRL27WBZ0" // MS-CIT course introduction video: https://www.youtube.com/watch?v=myoRL27WBZ0
  },
  {
    id: "gcc-tbc",
    title: "GCC-TBC",
    duration: "2 months",
    category: "Typing Skills",
    description: "Government Certificate in Computer Typing Basic Course for English and Marathi typing proficiency.",
    price: "₹4,700.00",
    originalPrice: "₹5,500.00",
    discount: "15% off",
    outcomes: [
      "Professional typing skills in English and Marathi",
      "Government-recognized typing certification",
      "Increased speed and accuracy in typing",
      "Qualification for government positions requiring typing skills"
    ],
    icon: "keyboard",
    featured: true,
    slug: "/courses/gcc-tbc",
    syllabus: [
      "Introduction to Typing",
      "English Typing - Basic to Advanced",
      "Marathi Typing - Basic to Advanced",
      "Speed and Accuracy Development",
      "Typing Tests and Certification"
    ],
    requirements: [
      "Basic computer knowledge",
      "Understanding of English and Marathi languages",
      "Dedication to practice regularly"
    ],
    faqs: [
      {
        question: "Is this course recognized by the government?",
        answer: "Yes, it's a government-certified typing course."
      },
      {
        question: "What typing speed will I achieve?",
        answer: "With regular practice, students typically achieve 25-35 WPM."
      }
    ],
    startDate: "1st of every month",
    schedule: "Weekdays: 1.5 hours, Weekends: 3 hours",
    instructor: "Certified Typing Instructor",
    level: "Beginner to Intermediate",
    language: "English, Marathi",
    certificate: true,
    maxStudents: 20,
    enrolled: 12,
    videoId: "zOqMj5iRzJE" // GCC-TBC course introduction video: https://www.youtube.com/watch?v=aA-npAoxIWo
  },
  {
    id: "mkcl-programs",
    title: "MKCL Programs",
    duration: "Varies",
    category: "Professional Development",
    description: "Various Maharashtra Knowledge Corporation Limited programs for digital literacy and professional skills.",
    price: "₹2,500.00",
    originalPrice: "₹3,000.00",
    discount: "17% off",
    outcomes: [
      "Digital literacy certification",
      "Professional development in IT domains",
      "Enhanced career prospects",
      "Industry-relevant practical skills"
    ],
    icon: "certificate",
    featured: true,
    slug: "/courses/mkcl-programs",
    syllabus: [
      "Digital Literacy Fundamentals",
      "MS Office Applications",
      "Internet and Email",
      "Financial Literacy",
      "Career Development Skills"
    ],
    requirements: [
      "Basic understanding of computers",
      "10th standard pass (for some programs)",
      "Willingness to learn new skills"
    ],
    faqs: [
      {
        question: "What programs are available?",
        answer: "We offer various programs including digital literacy, financial literacy, and career development courses."
      },
      {
        question: "Is there an exam at the end?",
        answer: "Yes, most programs include an assessment for certification."
      }
    ],
    startDate: "Rolling admissions",
    schedule: "Flexible timings available",
    instructor: "MKCL Certified Trainers",
    level: "Beginner to Advanced",
    language: "English, Marathi, Hindi",
    certificate: true,
    maxStudents: 30,
    enrolled: 22,
    videoId: "WIskNiG9QMo" // KLiC Programs introduction video: https://www.youtube.com/watch?v=WIskNiG9QMo
  }
];