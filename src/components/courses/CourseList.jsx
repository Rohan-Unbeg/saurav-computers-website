const CourseList = ({ courses }) => {
  const openModal = (e, courseId) => {
    e.preventDefault();
    document.dispatchEvent(new CustomEvent('openCourseModal', { detail: courseId }));
  };

  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">No courses found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 group"
          data-category={course.category}
        >
          <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
            <img 
              src={course.imageUrl} 
              alt={`${course.title} course`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/course-placeholder.jpg';
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
              <span className="text-white text-sm font-medium">{course.duration}</span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                {course.level}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {course.details?.about || 'No description available.'}
            </p>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">You'll learn:</h4>
              <ul className="space-y-2">
                {course.outcomes?.slice(0, 3).map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{outcome}</span>
                  </li>
                ))}
                {course.outcomes?.length > 3 && (
                  <li className="text-sm text-indigo-600 dark:text-indigo-400 ml-6">
                    +{course.outcomes.length - 3} more
                  </li>
                )}
              </ul>
            </div>

            <button 
              onClick={(e) => openModal(e, course.id)}
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
