import { useState, useEffect } from 'react';
import CourseModal from './CourseModal';
import CourseList from './CourseList';

// Import course data directly at the module level
import { mkclCourses } from '../../data/mkcl-courses';

export default function CourseModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [categories, setCategories] = useState(['all']);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Initialize courses and categories
  useEffect(() => {
    try {
      // Extract unique categories
      const uniqueCategories = ['all', ...new Set(mkclCourses.map(course => course.category))];
      setCategories(uniqueCategories);
      setFilteredCourses(mkclCourses);
    } catch (error) {
      console.error('Error initializing courses:', error);
    }
  }, []);

  // Handle modal open/close
  const handleOpenModal = (event) => {
    const courseId = event.detail;
    const course = mkclCourses.find(c => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
      setIsOpen(true);
    }
  };

  // Filter courses by category
  const filterCourses = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredCourses(mkclCourses);
    } else {
      setFilteredCourses(mkclCourses.filter(course => course.category === category));
    }
  };

  // Set up event listener for modal opening
  useEffect(() => {
    document.addEventListener('openCourseModal', handleOpenModal);
    return () => {
      document.removeEventListener('openCourseModal', handleOpenModal);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterCourses(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}
          </button>
        ))}
      </div>

      {/* Course List */}
      <CourseList courses={filteredCourses} />
      
      {/* Course Modal */}
      <CourseModal 
        course={selectedCourse} 
        open={isOpen} 
        onClose={handleClose} 
      />
    </div>
  );
}
