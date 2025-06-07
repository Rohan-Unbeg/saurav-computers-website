export interface FAQ {
  question: string;
  answer: string;
}

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
  faqs?: FAQ[];
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
