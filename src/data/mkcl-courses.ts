export interface MKCLCourse {
    id: string;
    title: string;
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    description: string;
    icon: string;
    imageUrl: string;
    category: string;
    outcomes: string[];
    syllabus?: string[];
    details?: {
        about: string;
        instructor: string;
        prerequisites: string[];
        highlights: string[];
        faq: { question: string; answer: string }[];
    };
}

import { courseImages, defaultCourseImage } from "./course-images";

export const mkclCourses: MKCLCourse[] = [
    {
        id: "klic-advanced-excel",
        title: "KLiC Advanced Excel",
        duration: "2 months",
        level: "Intermediate",
        category: "Accounting",
        description:
            "Master advanced Excel skills for data analysis, database creation, and business forecasting.",
        icon: "📊",
        imageUrl: courseImages["klic-advanced-excel"] || defaultCourseImage,
        outcomes: [
            "Proficiency in advanced Excel functions",
            "Skills in data analysis and reporting",
            "Database creation and management",
            "Career readiness in data-driven roles",
        ],
        syllabus: [
            "Advanced Excel Functions",
            "Data Analysis Techniques",
            "Database Management",
            "Report Creation",
            "Excel Projects",
        ],
        details: {
            about: "This course covers advanced Excel techniques for business and data analysis, including pivot tables, advanced formulas, and automation.",
            instructor: "Mr. Rohan Sharma",
            prerequisites: [
                "Basic knowledge of Excel",
                "Interest in data analysis",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior Excel experience required?",
                    answer: "Basic Excel knowledge is recommended but not mandatory.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-ai-ml",
        title: "KLiC AI-ML Basics",
        duration: "1 month",
        level: "Beginner",
        category: "New Collar Jobs",
        description:
            "Explore AI and ML concepts, models, and applications for daily use.",
        icon: "🤖",
        imageUrl: courseImages["klic-ai-ml"] || defaultCourseImage,
        outcomes: [
            "Understanding of AI-ML concepts",
            "Skills in model development",
            "Application of AI in daily tasks",
            "Career readiness in AI-ML",
        ],
        syllabus: [
            "AI-ML Fundamentals",
            "Model Development",
            "AI Applications",
            "Ethical Considerations in AI",
            "AI-ML Projects",
        ],
        details: {
            about: "This course introduces the fundamentals of AI and Machine Learning, covering concepts, models, and applications.",
            instructor: "Ms. Priya Patel",
            prerequisites: [
                "Basic understanding of programming",
                "Interest in technology",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior AI experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-autocad",
        title: "KLiC AutoCAD",
        duration: "2 months",
        level: "Intermediate",
        category: "Digital Arts",
        description:
            "Learn computer-aided design for architectural and engineering plans.",
        icon: "📐",
        imageUrl: courseImages["klic-autocad"] || defaultCourseImage,
        outcomes: [
            "Proficiency in AutoCAD software",
            "Skills in creating architectural plans",
            "Engineering design capabilities",
            "Career readiness in CAD design",
        ],
        syllabus: [
            "Introduction to AutoCAD",
            "2D and 3D Design Basics",
            "Architectural Floor Plans",
            "Engineering Drawings",
            "CAD Project Work",
        ],
        details: {
            about: "This course focuses on learning AutoCAD for creating architectural and engineering designs.",
            instructor: "Mr. Amit Singh",
            prerequisites: [
                "Basic knowledge of CAD software",
                "Interest in design",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior AutoCAD experience required?",
                    answer: "Basic knowledge is recommended but not mandatory.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-bfsi",
        title: "KLiC BFSI",
        duration: "2 months",
        level: "Intermediate",
        category: "Management",
        description:
            "Learn banking, financial services, and insurance operations with focus on digital banking.",
        icon: "🏦",
        imageUrl: courseImages["klic-bfsi"] || defaultCourseImage,
        outcomes: [
            "Knowledge of BFSI operations",
            "Skills in digital banking",
            "Understanding of financial regulations",
            "Career readiness in BFSI sector",
        ],
        syllabus: [
            "BFSI Fundamentals",
            "Digital Banking Services",
            "Financial Regulations",
            "Customer Service in BFSI",
            "BFSI Projects",
        ],
        details: {
            about: "This course covers the fundamentals of Banking, Financial Services, and Insurance operations, with a focus on digital banking.",
            instructor: "Ms. Neha Gupta",
            prerequisites: [
                "Basic understanding of banking",
                "Interest in financial services",
            ],
            highlights: [
                "Industry-relevant curriculum",
                "Hands-on projects",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior banking experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-c-programming",
        title: "KLiC C Programming",
        duration: "2 months",
        level: "Beginner",
        category: "Programming",
        description:
            "Learn fundamentals of C programming for software development.",
        icon: "💾",
        imageUrl: courseImages["klic-c-programming"] || defaultCourseImage,
        outcomes: [
            "C programming fundamentals",
            "Control structures mastery",
            "Program development skills",
            "Career readiness in programming",
        ],
        syllabus: [
            "C Programming Basics",
            "Data Types and Structures",
            "Control Structures",
            "Functions and Pointers",
            "C Programming Projects",
        ],
        details: {
            about: "This course covers the basics of C programming, including data types, control structures, and functions.",
            instructor: "Mr. Rajesh Kumar",
            prerequisites: [
                "Basic understanding of programming",
                "Interest in software development",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior programming experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-cpp-programming",
        title: "KLiC C++ Programming",
        duration: "2 months",
        level: "Intermediate",
        category: "Programming",
        description: "Master object-oriented programming using C++.",
        icon: "💾",
        imageUrl: courseImages["klic-cpp-programming"] || defaultCourseImage,
        outcomes: [
            "Object-oriented programming skills",
            "C++ syntax mastery",
            "Application development",
            "Career readiness in programming",
        ],
        syllabus: [
            "C++ Basics",
            "Object-Oriented Concepts",
            "Classes and Objects",
            "Inheritance and Polymorphism",
            "C++ Projects",
        ],
        details: {
            about: "This course covers the fundamentals of C++ programming, focusing on object-oriented concepts and application development.",
            instructor: "Ms. Anjali Sharma",
            prerequisites: [
                "Basic understanding of C programming",
                "Interest in object-oriented programming",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior C++ experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-c-cpp-programming",
        title: "KLiC C & C++ Programming",
        duration: "2 months",
        level: "Intermediate",
        category: "Programming",
        description:
            "Learn both C and C++ for versatile programming skills across platforms.",
        icon: "💾",
        imageUrl: courseImages["klic-c-cpp-programming"] || defaultCourseImage,
        outcomes: [
            "Proficiency in C and C++",
            "Cross-platform programming skills",
            "Application development",
            "Career readiness in programming",
        ],
        syllabus: [
            "C Programming Basics",
            "C++ Object-Oriented Concepts",
            "Data Structures in C/C++",
            "Program Optimization",
            "C/C++ Projects",
        ],
        details: {
            about: "This course covers both C and C++ programming, focusing on versatile programming skills across different platforms.",
            instructor: "Mr. Aarav Verma",
            prerequisites: [
                "Basic understanding of C programming",
                "Interest in C++ programming",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior C programming experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-content-illustration",
        title: "KLiC Content Illustration",
        duration: "2 months",
        level: "Intermediate",
        category: "Designing",
        description:
            "Create compelling illustrations for branding and digital content.",
        icon: "🖌️",
        imageUrl:
            courseImages["klic-content-illustration"] || defaultCourseImage,
        outcomes: [
            "Skills in digital illustration",
            "Branding content creation",
            "Visual storytelling",
            "Career readiness in illustration",
        ],
        syllabus: [
            "Illustration Fundamentals",
            "Digital Illustration Tools",
            "Branding Illustrations",
            "Visual Storytelling",
            "Illustration Projects",
        ],
        details: {
            about: "This course covers the fundamentals of digital illustration and content creation for branding and digital content.",
            instructor: "Ms. Rani Mehta",
            prerequisites: [
                "Basic understanding of design principles",
                "Interest in digital illustration",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior illustration experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-cyber-security",
        title: "KLiC Cyber Security",
        duration: "1 month",
        level: "Beginner",
        category: "IT Hardware and Networking",
        description:
            "Learn to protect against cyber threats, frauds, and privacy invasions.",
        icon: "🔒",
        imageUrl: courseImages["klic-cyber-security"] || defaultCourseImage,
        outcomes: [
            "Cyber threat identification",
            "Security implementation skills",
            "Privacy protection techniques",
            "Career readiness in cyber security",
        ],
        syllabus: [
            "Cyber Security Basics",
            "Threat Identification",
            "Security Implementation",
            "Privacy Protection",
            "Cyber Security Projects",
        ],
        details: {
            about: "This course covers the basics of cyber security, including threat identification, security implementation, and privacy protection.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Basic understanding of IT security",
                "Interest in cybersecurity",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior cyber security experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-c-sharp",
        title: "KLiC C Sharp (C#)",
        duration: "2 months",
        level: "Intermediate",
        category: "Programming",
        description: "Learn C# for developing web and mobile applications.",
        icon: "💾",
        imageUrl: courseImages["klic-c-sharp"] || defaultCourseImage,
        outcomes: [
            "C# programming skills",
            "Web and mobile app development",
            "Object-oriented programming",
            "Career readiness in C# development",
        ],
        syllabus: [
            "C# Basics",
            "Object-Oriented Programming",
            "Web Development with C#",
            "Mobile App Development",
            "C# Projects",
        ],
        details: {
            about: "This course covers the fundamentals of C# programming, focusing on web and mobile application development.",
            instructor: "Ms. Deepa Reddy",
            prerequisites: [
                "Basic understanding of programming",
                "Interest in C# development",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior C# experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-data-entry",
        title: "KLiC Data Entry and Data Management",
        duration: "2 months",
        level: "Beginner",
        category: "Back Office",
        description:
            "Training in data entry skills, focusing on speed, accuracy, and database management.",
        icon: "📋",
        imageUrl: courseImages["klic-data-entry"] || defaultCourseImage,
        outcomes: [
            "Fast and accurate data entry skills",
            "Proficiency in spreadsheets and forms",
            "Database management basics",
            "Preparation for back-office roles",
        ],
        syllabus: [
            "Introduction to Data Entry",
            "Typing Speed and Accuracy",
            "Spreadsheet Management",
            "Online Form Handling",
            "Data Verification Techniques",
        ],
        details: {
            about: "This course covers the basics of data entry and database management, focusing on speed, accuracy, and database management.",
            instructor: "Ms. Priya Patel",
            prerequisites: [
                "Basic understanding of data entry",
                "Interest in back-office roles",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior data entry experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-data-analytics",
        title: "KLiC Data Analytics and Data Visualisation",
        duration: "2 months",
        level: "Intermediate",
        category: "Programming",
        description:
            "Learn to transform raw data into impactful dashboards using Excel, Power BI, and Tableau.",
        icon: "📈",
        imageUrl: courseImages["klic-data-analytics"] || defaultCourseImage,
        outcomes: [
            "Data analysis skills",
            "Proficiency in visualization tools",
            "Dashboard creation",
            "Career readiness in data analytics",
        ],
        syllabus: [
            "Data Analysis Fundamentals",
            "Excel for Data Analysis",
            "Power BI and Tableau",
            "Dashboard Creation",
            "Data Analytics Projects",
        ],
        details: {
            about: "This course covers the fundamentals of data analytics and data visualization, focusing on transforming raw data into impactful dashboards using Excel, Power BI, and Tableau.",
            instructor: "Mr. Aarav Verma",
            prerequisites: [
                "Basic understanding of data analysis",
                "Interest in data visualization",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior data analytics experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-dbms",
        title: "KLiC Database Management System (DBMS)",
        duration: "2 months",
        level: "Intermediate",
        category: "Programming",
        description:
            "Learn database design, SQL querying, and advanced database management.",
        icon: "🗄️",
        imageUrl: courseImages["klic-dbms"] || defaultCourseImage,
        outcomes: [
            "Database design skills",
            "SQL querying proficiency",
            "Data management expertise",
            "Career readiness in DBMS",
        ],
        syllabus: [
            "Database Fundamentals",
            "SQL Querying",
            "Database Design",
            "NoSQL and Cloud Databases",
            "DBMS Projects",
        ],
        details: {
            about: "This course covers the fundamentals of database management systems (DBMS), including database design, SQL querying, and advanced database management.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Basic understanding of database management",
                "Interest in DBMS",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior DBMS experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-data-structures",
        title: "KLiC Data Structures using C and C++",
        duration: "2 months",
        level: "Advanced",
        category: "Programming",
        description:
            "Learn to organize and manipulate data using C and C++ for optimized performance.",
        icon: "📚",
        imageUrl: courseImages["klic-data-structures"] || defaultCourseImage,
        outcomes: [
            "Data structure mastery",
            "Algorithm implementation",
            "Programming optimization",
            "Career readiness in programming",
        ],
        syllabus: [
            "Data Structure Basics",
            "Algorithms in C/C++",
            "Sorting and Searching",
            "Data Optimization",
            "Algorithm Projects",
        ],
        details: {
            about: "This course covers the fundamentals of data structures and algorithms using C and C++, focusing on organizing and manipulating data for optimized performance.",
            instructor: "Ms. Anjali Sharma",
            prerequisites: [
                "Basic understanding of programming",
                "Interest in data structures",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior C programming experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-desktop-support",
        title: "KLiC Desktop Support",
        duration: "2 months",
        level: "Intermediate",
        category: "IT Hardware and Networking",
        description:
            "Learn to configure and maintain operating systems on desktops and laptops.",
        icon: "🖥️",
        imageUrl: courseImages["klic-desktop-support"] || defaultCourseImage,
        outcomes: [
            "OS configuration skills",
            "Desktop maintenance expertise",
            "Bulk installation capabilities",
            "Career readiness in IT support",
        ],
        syllabus: [
            "Operating System Basics",
            "Desktop Configuration",
            "System Maintenance",
            "Bulk OS Installation",
            "Support Projects",
        ],
        details: {
            about: "This course covers the fundamentals of desktop support, focusing on configuring and maintaining operating systems on desktops and laptops.",
            instructor: "Mr. Aarav Verma",
            prerequisites: [
                "Basic understanding of IT hardware and networking",
                "Interest in desktop support",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior desktop support experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-digital-freelancing",
        title: "KLiC Digital Freelancing",
        duration: "1 month",
        level: "Beginner",
        category: "Digital Freelancing",
        description:
            "Learn skills to tap freelancing opportunities on global platforms.",
        icon: "🌐",
        imageUrl:
            courseImages["klic-digital-freelancing"] || defaultCourseImage,
        outcomes: [
            "Skills in project bidding",
            "Client communication expertise",
            "Freelancing platform navigation",
            "Career readiness in freelancing",
        ],
        syllabus: [
            "Introduction to Freelancing",
            "Freelancing Platforms",
            "Project Bidding Strategies",
            "Client Communication",
            "Freelancing Projects",
        ],
        details: {
            about: "This course covers the fundamentals of digital freelancing, focusing on skills to tap into freelancing opportunities on global platforms.",
            instructor: "Ms. Rani Mehta",
            prerequisites: [
                "Basic understanding of digital platforms",
                "Interest in freelancing",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior digital platform experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-dtp-adobe",
        title: "KLiC DTP (Adobe)",
        duration: "2 months",
        level: "Beginner",
        category: "Designing",
        description:
            "Master desktop publishing using Adobe tools for professional print materials.",
        icon: "🖌️",
        imageUrl: courseImages["klic-dtp-adobe"] || defaultCourseImage,
        outcomes: [
            "Proficiency in Adobe DTP tools",
            "Skills in creating print materials",
            "Design project execution",
            "Career readiness in publishing",
        ],
        syllabus: [
            "Introduction to Desktop Publishing",
            "Adobe InDesign Basics",
            "Layout and Typography",
            "Print Material Design",
            "DTP Projects",
        ],
        details: {
            about: "This course covers the fundamentals of desktop publishing using Adobe tools for professional print materials.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Basic understanding of design principles",
                "Interest in desktop publishing",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question:
                        "Is prior desktop publishing experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-dtp-coreldraw",
        title: "KLiC DTP (CorelDRAW)",
        duration: "2 months",
        level: "Beginner",
        category: "Designing",
        description:
            "Learn desktop publishing using CorelDRAW for professional design and layout.",
        icon: "🖌️",
        imageUrl: courseImages["klic-dtp-coreldraw"] || defaultCourseImage,
        outcomes: [
            "Proficiency in CorelDRAW",
            "Skills in design and layout",
            "Print material creation",
            "Career readiness in DTP",
        ],
        syllabus: [
            "CorelDRAW Basics",
            "Design and Layout Techniques",
            "Typography and Graphics",
            "Print Material Design",
            "DTP Projects",
        ],
        details: {
            about: "This course covers the fundamentals of desktop publishing using CorelDRAW for professional design and layout.",
            instructor: "Ms. Deepa Reddy",
            prerequisites: [
                "Basic understanding of design principles",
                "Interest in desktop publishing",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question:
                        "Is prior desktop publishing experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-dtp-adobe-coreldraw",
        title: "KLiC DTP (Adobe & CorelDRAW)",
        duration: "2 months",
        level: "Intermediate",
        category: "Designing",
        description:
            "Master both Adobe and CorelDRAW tools for versatile desktop publishing.",
        icon: "🖌️",
        imageUrl:
            courseImages["klic-dtp-adobe-coreldraw"] || defaultCourseImage,
        outcomes: [
            "Proficiency in Adobe and CorelDRAW",
            "Advanced DTP skills",
            "Versatile design capabilities",
            "Career readiness in publishing",
        ],
        syllabus: [
            "Adobe and CorelDRAW Basics",
            "Advanced Layout Techniques",
            "Typography and Graphics",
            "Print Material Design",
            "DTP Projects",
        ],
        details: {
            about: "This course covers the fundamentals of desktop publishing using both Adobe and CorelDRAW tools for versatile design capabilities.",
            instructor: "Mr. Aarav Verma",
            prerequisites: [
                "Basic understanding of design principles",
                "Interest in desktop publishing",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question:
                        "Is prior desktop publishing experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-english",
        title: "KLiC English",
        duration: "2 months",
        level: "Beginner",
        category: "Front Office",
        description:
            "Enhance English communication skills for professional and personal growth.",
        icon: "🗣️",
        imageUrl: courseImages["klic-english"] || defaultCourseImage,
        outcomes: [
            "Improved English communication",
            "Professional language skills",
            "Confidence in public speaking",
            "Career readiness in communication",
        ],
        syllabus: [
            "English Grammar Basics",
            "Vocabulary Building",
            "Communication Skills",
            "Public Speaking",
            "English Projects",
        ],
        details: {
            about: "This course covers the fundamentals of English communication, focusing on enhancing English skills for professional and personal growth.",
            instructor: "Ms. Rani Mehta",
            prerequisites: [
                "Basic understanding of English grammar",
                "Interest in communication skills",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior English language experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-google-workspace",
        title: "KLiC Google Workspace Expert",
        duration: "2 months",
        level: "Beginner",
        category: "Back Office",
        description:
            "Master the Google Workspace ecosystem for productivity and collaboration.",
        icon: "📧",
        imageUrl: courseImages["klic-google-workspace"] || defaultCourseImage,
        outcomes: [
            "Proficiency in Google Workspace tools",
            "Collaboration skills",
            "Productivity enhancement",
            "Career readiness in workspace management",
        ],
        syllabus: [
            "Google Workspace Overview",
            "Google Docs and Sheets",
            "Google Drive and Collaboration",
            "Workspace Administration",
            "Workspace Projects",
        ],
        details: {
            about: "This course covers the fundamentals of the Google Workspace ecosystem, focusing on mastering Google Workspace tools for productivity and collaboration.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Basic understanding of productivity tools",
                "Interest in workspace management",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question:
                        "Is prior workspace management experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-graphic-designing",
        title: "KLiC Graphic Designing",
        duration: "2 months",
        level: "Intermediate",
        category: "Designing",
        description:
            "Learn to design and edit graphics using industry-standard software.",
        icon: "🎨",
        imageUrl: courseImages["klic-graphic-designing"] || defaultCourseImage,
        outcomes: [
            "Proficiency in graphic design software",
            "Creation of professional graphics",
            "Visual communication skills",
            "Career readiness in graphic design",
        ],
        syllabus: [
            "Graphic Design Fundamentals",
            "Adobe Photoshop and Illustrator",
            "Image Editing Techniques",
            "Branding and Visual Design",
            "Graphic Design Projects",
        ],
        details: {
            about: "This course covers the fundamentals of graphic design using industry-standard software, focusing on creating professional graphics and visual communication skills.",
            instructor: "Ms. Deepa Reddy",
            prerequisites: [
                "Basic understanding of graphic design principles",
                "Interest in graphic design software",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior graphic design experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-hardware-support",
        title: "KLiC Hardware Support",
        duration: "2 months",
        level: "Intermediate",
        category: "IT Hardware and Networking",
        description: "Master hardware troubleshooting and system maintenance.",
        icon: "🔧",
        imageUrl: courseImages["klic-hardware-support"] || defaultCourseImage,
        outcomes: [
            "Hardware troubleshooting skills",
            "OS installation requirements",
            "System maintenance expertise",
            "Career readiness in hardware support",
        ],
        syllabus: [
            "Hardware Fundamentals",
            "Troubleshooting Techniques",
            "OS Installation Requirements",
            "System Maintenance",
            "Hardware Projects",
        ],
        details: {
            about: "This course covers the fundamentals of hardware troubleshooting and system maintenance, focusing on mastering hardware troubleshooting skills and system maintenance expertise.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Basic understanding of IT hardware",
                "Interest in hardware support",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior hardware support experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-html-css",
        title: "KLiC HTML with CSS",
        duration: "2 months",
        level: "Beginner",
        category: "Programming",
        description:
            "Learn web development fundamentals for creating responsive websites.",
        icon: "🌐",
        imageUrl: courseImages["klic-html-css"] || defaultCourseImage,
        outcomes: [
            "HTML and CSS mastery",
            "Responsive web design",
            "Website development skills",
            "Career readiness in web development",
        ],
        syllabus: [
            "HTML Basics",
            "CSS Styling",
            "Responsive Design",
            "Web Layouts",
            "Web Development Projects",
        ],
        details: {
            about: "This course covers the fundamentals of HTML and CSS for creating responsive websites.",
            instructor: "Mr. Aarav Verma",
            prerequisites: [
                "Basic understanding of web development",
                "Interest in HTML and CSS",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior web development experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-it",
        title: "KLiC IT",
        duration: "2 months",
        level: "Beginner",
        category: "Front Office",
        description:
            "Develop basic IT literacy and job-readiness skills for modern workplaces.",
        icon: "💻",
        imageUrl: courseImages["klic-it"] || defaultCourseImage,
        outcomes: [
            "Basic IT literacy",
            "Typing and software skills",
            "21st-century job skills",
            "Career readiness in IT",
        ],
        syllabus: [
            "IT Fundamentals",
            "Typing Skills",
            "Software Applications",
            "21st-Century Skills",
            "IT Projects",
        ],
        details: {
            about: "This course covers the fundamentals of IT literacy and job-readiness skills for modern workplaces.",
            instructor: "Ms. Priya Patel",
            prerequisites: [
                "Basic understanding of IT literacy",
                "Interest in IT",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior IT literacy experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-iot",
        title: "KLiC IoT",
        duration: "1 month",
        level: "Beginner",
        category: "New Collar Jobs",
        description:
            "Learn Internet of Things concepts for connecting devices online.",
        icon: "🌐",
        imageUrl: courseImages["klic-iot"] || defaultCourseImage,
        outcomes: [
            "Understanding of IoT concepts",
            "Device connectivity skills",
            "IoT application development",
            "Career readiness in IoT",
        ],
        syllabus: [
            "IoT Fundamentals",
            "Device Connectivity",
            "IoT Applications",
            "Security in IoT",
            "IoT Projects",
        ],
        details: {
            about: "This course covers the fundamentals of the Internet of Things (IoT), focusing on understanding IoT concepts and device connectivity skills.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Basic understanding of IoT concepts",
                "Interest in IoT",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior IoT experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-it-for-art-teacher",
        title: "KLiC IT for Art Teacher",
        duration: "2 months",
        level: "Beginner",
        category: "Digital Arts",
        description:
            "Equip art teachers with IT skills for enhanced teaching and creativity.",
        icon: "🎨",
        imageUrl: courseImages["klic-it-for-art-teacher"] || defaultCourseImage,
        outcomes: [
            "IT skills for teaching",
            "Digital art creation",
            "Enhanced classroom engagement",
            "Career readiness in art education",
        ],
        syllabus: [
            "IT Fundamentals for Teachers",
            "Digital Art Tools",
            "Classroom Technology",
            "Creative Teaching Methods",
            "Art IT Projects",
        ],
        details: {
            about: "This course covers the fundamentals of IT skills for art teachers, focusing on equipping them with IT skills for enhanced teaching and creativity.",
            instructor: "Ms. Rani Mehta",
            prerequisites: [
                "Basic understanding of digital arts",
                "Interest in art education",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior IT experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-java",
        title: "KLiC Java",
        duration: "2 months",
        level: "Intermediate",
        category: "Programming",
        description: "Master Java for developing robust applications.",
        icon: "☕",
        imageUrl: courseImages["klic-java"] || defaultCourseImage,
        outcomes: [
            "Java programming skills",
            "Application development",
            "Object-oriented programming",
            "Career readiness in Java",
        ],
        syllabus: [
            "Java Basics",
            "Object-Oriented Programming",
            "Java Libraries",
            "Exception Handling",
            "Java Projects",
        ],
        details: {
            about: "This course covers the fundamentals of Java programming, focusing on developing robust applications using Java.",
            instructor: "Mr. Aarav Verma",
            prerequisites: [
                "Basic understanding of programming",
                "Interest in Java",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior Java experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-advanced-java",
        title: "KLiC Advanced Java",
        duration: "2 months",
        level: "Advanced",
        category: "Programming",
        description:
            "Learn advanced Java concepts for enterprise-level applications.",
        icon: "☕",
        imageUrl: courseImages["klic-advanced-java"] || defaultCourseImage,
        outcomes: [
            "Advanced Java programming",
            "Enterprise application development",
            "Framework usage skills",
            "Career readiness in advanced Java",
        ],
        syllabus: [
            "Advanced Java Concepts",
            "Java Frameworks",
            "Enterprise Applications",
            "Database Integration",
            "Java Projects",
        ],
        details: {
            about: "This course covers advanced Java concepts for developing enterprise-level applications.",
            instructor: "Ms. Deepa Reddy",
            prerequisites: [
                "Intermediate Java programming",
                "Interest in enterprise applications",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior advanced Java experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-mobile-app-development",
        title: "KLiC Mobile App Development",
        duration: "2 months",
        level: "Intermediate",
        category: "Programming",
        description:
            "Learn to develop Android mobile applications using industry tools.",
        icon: "📱",
        imageUrl:
            courseImages["klic-mobile-app-development"] || defaultCourseImage,
        outcomes: [
            "Android app development skills",
            "Mobile UI/UX design",
            "App deployment knowledge",
            "Career readiness in mobile development",
        ],
        syllabus: [
            "Android Development Basics",
            "Mobile UI/UX Design",
            "App Development Tools",
            "App Deployment",
            "Mobile App Projects",
        ],
        details: {
            about: "This course covers the fundamentals of developing Android mobile applications using industry tools.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Intermediate programming skills",
                "Interest in mobile development",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question:
                        "Is prior mobile development experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-network-support",
        title: "KLiC Network Support",
        duration: "2 months",
        level: "Intermediate",
        category: "IT Hardware and Networking",
        description:
            "Learn network troubleshooting, monitoring, and maintenance.",
        icon: "📶",
        imageUrl: courseImages["klic-network-support"] || defaultCourseImage,
        outcomes: [
            "Network troubleshooting skills",
            "Monitoring and maintenance",
            "Networking device management",
            "Career readiness in network support",
        ],
        syllabus: [
            "Networking Fundamentals",
            "Network Troubleshooting",
            "Device Management",
            "Network Security",
            "Networking Projects",
        ],
        details: {
            about: "This course covers the fundamentals of network troubleshooting, monitoring, and maintenance, focusing on mastering network troubleshooting skills and device management.",
            instructor: "Mr. Aarav Verma",
            prerequisites: [
                "Intermediate understanding of networking",
                "Interest in network support",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior network support experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-office-assistance",
        title: "KLiC Office Assistance",
        duration: "2 months",
        level: "Beginner",
        category: "Back Office",
        description:
            "Learn administrative tasks and Microsoft Office for office support roles.",
        icon: "🗂️",
        imageUrl: courseImages["klic-office-assistance"] || defaultCourseImage,
        outcomes: [
            "Microsoft Office proficiency",
            "Administrative skills",
            "Document management",
            "Career readiness in office support",
        ],
        syllabus: [
            "Office Administration Basics",
            "Microsoft Office Tools",
            "Document Management",
            "Workflow Optimization",
            "Office Projects",
        ],
        details: {
            about: "This course covers the fundamentals of Microsoft Office proficiency and administrative skills for office support roles.",
            instructor: "Ms. Priya Patel",
            prerequisites: [
                "Basic understanding of office tasks",
                "Interest in office support",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior office experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-photoshop",
        title: "KLiC Photoshop",
        duration: "2 months",
        level: "Beginner",
        category: "Designing",
        description:
            "Master Photoshop for photo editing and digital art creation.",
        icon: "🖼️",
        imageUrl: courseImages["klic-photoshop"] || defaultCourseImage,
        outcomes: [
            "Photoshop editing skills",
            "Digital art creation",
            "Image manipulation expertise",
            "Career readiness in digital arts",
        ],
        syllabus: [
            "Photoshop Basics",
            "Image Editing Techniques",
            "Digital Art Creation",
            "Photo Manipulation",
            "Photoshop Projects",
        ],
        details: {
            about: "This course covers the fundamentals of Photoshop for photo editing and digital art creation.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Basic understanding of digital art",
                "Interest in Photoshop",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior digital art experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-python",
        title: "KLiC Python",
        duration: "2 months",
        level: "Intermediate",
        category: "Programming",
        description:
            "Learn Python for data science, AI/ML, and web development.",
        icon: "🐍",
        imageUrl: courseImages["klic-python"] || defaultCourseImage,
        outcomes: [
            "Python programming skills",
            "Data science applications",
            "Web development basics",
            "Career readiness in Python",
        ],
        syllabus: [
            "Python Fundamentals",
            "Data Structures in Python",
            "Data Science Applications",
            "Web Frameworks (Flask, Django)",
            "Python Projects",
        ],
        details: {
            about: "This course covers the fundamentals of Python programming for data science, AI/ML, and web development.",
            instructor: "Ms. Deepa Reddy",
            prerequisites: [
                "Basic understanding of programming",
                "Interest in Python",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior Python experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-advanced-python",
        title: "KLiC Advanced Python",
        duration: "2 months",
        level: "Advanced",
        category: "Programming",
        description:
            "Master advanced Python for web development and database management.",
        icon: "🐍",
        imageUrl: courseImages["klic-advanced-python"] || defaultCourseImage,
        outcomes: [
            "Advanced Python programming",
            "Web development with Flask",
            "Database management with SQLAlchemy",
            "Career readiness in advanced Python",
        ],
        syllabus: [
            "Advanced Python Concepts",
            "Flask Web Development",
            "SQLAlchemy ORM",
            "API Development",
            "Python Projects",
        ],
        details: {
            about: "This course covers advanced Python programming for web development and database management.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Intermediate Python programming",
                "Interest in web development",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior Python experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-php",
        title: "KLiC PHP",
        duration: "2 months",
        level: "Intermediate",
        category: "Programming",
        description:
            "Learn PHP for server-side web development and database integration.",
        icon: "🌐",
        imageUrl: courseImages["klic-php"] || defaultCourseImage,
        outcomes: [
            "PHP programming skills",
            "Server-side web development",
            "Database integration",
            "Career readiness in PHP development",
        ],
        syllabus: [
            "PHP Basics",
            "Server-Side Scripting",
            "MySQL Integration",
            "Web Development with PHP",
            "PHP Projects",
        ],
        details: {
            about: "This course covers the fundamentals of PHP programming for server-side web development and database integration.",
            instructor: "Ms. Rani Mehta",
            prerequisites: [
                "Basic understanding of web development",
                "Interest in PHP",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior web development experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-retail-management",
        title: "KLiC Retail Management",
        duration: "2 months",
        level: "Beginner",
        category: "Management",
        description:
            "Learn retail operations and customer service for the retail industry.",
        icon: "🛍️",
        imageUrl: courseImages["klic-retail-management"] || defaultCourseImage,
        outcomes: [
            "Retail operation skills",
            "Customer service expertise",
            "Store management knowledge",
            "Career readiness in retail",
        ],
        syllabus: [
            "Retail Fundamentals",
            "Customer Service Techniques",
            "Store Management",
            "Sales Strategies",
            "Retail Projects",
        ],
        details: {
            about: "This course covers the fundamentals of retail operations and customer service for the retail industry.",
            instructor: "Mr. Aarav Verma",
            prerequisites: [
                "Basic understanding of retail operations",
                "Interest in retail",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior retail experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-scratch",
        title: "KLiC SCRATCH",
        duration: "1 month",
        level: "Beginner",
        category: "New Collar Jobs",
        description:
            "Learn visual programming with Scratch for creating interactive stories and games.",
        icon: "🎮",
        imageUrl: courseImages["klic-scratch"] || defaultCourseImage,
        outcomes: [
            "Visual programming skills",
            "Game and story creation",
            "Creative coding",
            "Career readiness in programming",
        ],
        syllabus: [
            "Scratch Basics",
            "Interactive Storytelling",
            "Game Development",
            "Animation Creation",
            "Scratch Projects",
        ],
        details: {
            about: "This course covers the fundamentals of visual programming with Scratch for creating interactive stories and games.",
            instructor: "Ms. Rani Mehta",
            prerequisites: [
                "Basic understanding of programming",
                "Interest in game development",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior programming experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-security-support",
        title: "KLiC Security Support",
        duration: "2 months",
        level: "Intermediate",
        category: "IT Hardware and Networking",
        description:
            "Learn cybersecurity techniques for protecting digital environments.",
        icon: "🔒",
        imageUrl: courseImages["klic-security-support"] || defaultCourseImage,
        outcomes: [
            "Cybersecurity skills",
            "Threat mitigation techniques",
            "Network security knowledge",
            "Career readiness in security support",
        ],
        syllabus: [
            "Cybersecurity Fundamentals",
            "Threat Mitigation",
            "Network Security",
            "Security Tools",
            "Security Projects",
        ],
        details: {
            about: "This course covers the fundamentals of cybersecurity techniques for protecting digital environments.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Intermediate understanding of cybersecurity",
                "Interest in security",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior cybersecurity experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-smart-teacher",
        title: "KLiC Smart Teacher",
        duration: "1 month",
        level: "Beginner",
        category: "Front Office",
        description:
            "Equip teachers with digital tools for modern classroom teaching.",
        icon: "👩‍🏫",
        imageUrl: courseImages["klic-smart-teacher"] || defaultCourseImage,
        outcomes: [
            "Digital teaching skills",
            "Classroom technology usage",
            "Student engagement techniques",
            "Career readiness in education",
        ],
        syllabus: [
            "Digital Teaching Tools",
            "Classroom Technology",
            "Student Engagement",
            "Lesson Planning",
            "Teaching Projects",
        ],
        details: {
            about: "This course covers the fundamentals of equipping teachers with digital tools for modern classroom teaching.",
            instructor: "Ms. Rani Mehta",
            prerequisites: [
                "Basic understanding of digital tools",
                "Interest in education",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior digital teaching experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-social-media-marketing",
        title: "KLiC Social Media Marketing",
        duration: "1 month",
        level: "Beginner",
        category: "Digital Freelancing",
        description:
            "Learn strategies for managing social media campaigns and analytics.",
        icon: "📱",
        imageUrl:
            courseImages["klic-social-media-marketing"] || defaultCourseImage,
        outcomes: [
            "Social media campaign management",
            "Content scheduling skills",
            "Analytics and reporting",
            "Career readiness in social media",
        ],
        syllabus: [
            "Social Media Basics",
            "Content Creation and Scheduling",
            "Social Media Analytics",
            "Campaign Management",
            "Social Media Projects",
        ],
        details: {
            about: "This course covers the fundamentals of managing social media campaigns and analytics for digital marketing.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Basic understanding of social media marketing",
                "Interest in digital marketing",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question:
                        "Is prior social media marketing experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-soft-skills",
        title: "KLiC Soft Skills",
        duration: "2 months",
        level: "Beginner",
        category: "Front Office",
        description:
            "Develop communication and interpersonal skills for workplace success.",
        icon: "🤝",
        imageUrl: courseImages["klic-soft-skills"] || defaultCourseImage,
        outcomes: [
            "Effective communication skills",
            "Interpersonal relationship building",
            "Workplace readiness",
            "Career enhancement",
        ],
        syllabus: [
            "Communication Skills",
            "Interpersonal Skills",
            "Time Management",
            "Teamwork",
            "Soft Skills Projects",
        ],
        details: {
            about: "This course covers the fundamentals of developing effective communication and interpersonal skills for workplace success.",
            instructor: "Ms. Rani Mehta",
            prerequisites: [
                "Basic understanding of workplace communication",
                "Interest in interpersonal skills",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior workplace experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-tally-gst",
        title: "KLiC Tally Prime with GST",
        duration: "2 months",
        level: "Beginner",
        category: "Accounting",
        description:
            "Learn financial accounting and GST compliance using Tally software for business accounting needs.",
        icon: "📊",
        imageUrl: courseImages["klic-tally-gst"] || defaultCourseImage,
        outcomes: [
            "Mastery of Tally for accounting",
            "Understanding of GST compliance",
            "Skills in inventory management",
            "Preparation for accounting roles",
        ],
        syllabus: [
            "Introduction to Tally",
            "Financial Accounting Basics",
            "GST Compliance and Filing",
            "Inventory Management",
            "Financial Reporting",
        ],
        details: {
            about: "This course covers the fundamentals of using Tally software for financial accounting and GST compliance.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Basic understanding of accounting",
                "Interest in Tally software",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior accounting experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-advanced-tally-gst",
        title: "KLiC Advanced Tally Prime with GST",
        duration: "2 months",
        level: "Intermediate",
        category: "Accounting",
        description:
            "Master advanced Tally features for financial accounting, payroll, and GST compliance.",
        icon: "📊",
        imageUrl: courseImages["klic-advanced-tally-gst"] || defaultCourseImage,
        outcomes: [
            "Advanced Tally proficiency",
            "Payroll processing skills",
            "GST and TDS compliance",
            "Career readiness in advanced accounting",
        ],
        syllabus: [
            "Advanced Tally Features",
            "Payroll Processing",
            "GST and TDS Compliance",
            "Financial Analysis",
            "Tally Projects",
        ],
        details: {
            about: "This course covers the fundamentals of mastering advanced Tally features for financial accounting, payroll, and GST compliance.",
            instructor: "Ms. Deepa Reddy",
            prerequisites: [
                "Intermediate Tally proficiency",
                "Interest in advanced accounting",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question:
                        "Is prior advanced accounting experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-video-editing",
        title: "KLiC Video Editing",
        duration: "2 months",
        level: "Intermediate",
        category: "Designing",
        description:
            "Master video editing software for professional video production.",
        icon: "🎬",
        imageUrl: courseImages["klic-video-editing"] || defaultCourseImage,
        outcomes: [
            "Proficiency in video editing tools",
            "Skills in video production",
            "Post-production techniques",
            "Career readiness in video editing",
        ],
        syllabus: [
            "Introduction to Video Editing",
            "Video Editing Software",
            "Cutting and Transitions",
            "Audio Integration",
            "Video Editing Projects",
        ],
        details: {
            about: "This course covers the fundamentals of mastering video editing software for professional video production.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Intermediate understanding of video editing",
                "Interest in video production",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior video editing experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-web-designing",
        title: "KLiC Web Designing",
        duration: "2 months",
        level: "Intermediate",
        category: "Designing",
        description:
            "Learn to create visually appealing and responsive websites.",
        icon: "🌐",
        imageUrl: courseImages["klic-web-designing"] || defaultCourseImage,
        outcomes: [
            "Web design skills",
            "Responsive website creation",
            "UI/UX basics",
            "Career readiness in web design",
        ],
        syllabus: [
            "Web Design Fundamentals",
            "HTML and CSS for Design",
            "UI/UX Principles",
            "Responsive Design",
            "Web Design Projects",
        ],
        details: {
            about: "This course covers the fundamentals of creating visually appealing and responsive websites.",
            instructor: "Ms. Rani Mehta",
            prerequisites: [
                "Basic understanding of web design principles",
                "Interest in web design",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior web design experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
    {
        id: "klic-3d-modelling",
        title: "KLiC 3D Modelling",
        duration: "2 months",
        level: "Intermediate",
        category: "Digital Arts",
        description:
            "Learn 3D modeling and animation for multimedia and design projects.",
        icon: "🖼️",
        imageUrl: courseImages["klic-3d-modelling"] || defaultCourseImage,
        outcomes: [
            "3D modeling skills",
            "Animation techniques",
            "Multimedia project creation",
            "Career readiness in 3D design",
        ],
        syllabus: [
            "3D Modeling Basics",
            "Animation Techniques",
            "Rendering and Texturing",
            "Multimedia Design",
            "3D Modeling Projects",
        ],
        details: {
            about: "This course covers the fundamentals of 3D modeling and animation for multimedia and design projects.",
            instructor: "Mr. Mohan Singh",
            prerequisites: [
                "Intermediate understanding of 3D design",
                "Interest in digital arts",
            ],
            highlights: [
                "Hands-on projects",
                "Industry-relevant curriculum",
                "Certificate on completion",
            ],
            faq: [
                {
                    question: "Is prior 3D design experience required?",
                    answer: "No, but it's beneficial.",
                },
                {
                    question: "Will I get a certificate?",
                    answer: "Yes, a certificate is provided upon successful completion.",
                },
            ],
        },
    },
];
