// Tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('[role="tab"]');
  const tabPanels = document.querySelectorAll('[role="tabpanel"]');

  function handleTabClick(event) {
    event.preventDefault();
    const target = event.currentTarget;
    
    // Hide all tab panels
    tabPanels.forEach((panel) => {
      panel.classList.add('hidden');
    });

    // Remove active state from all tabs
    tabButtons.forEach((tab) => {
      tab.setAttribute('aria-selected', 'false');
      tab.classList.remove('text-indigo-600', 'border-indigo-600', 'dark:text-indigo-500', 'dark:border-indigo-500');
      tab.classList.add('border-transparent', 'hover:text-gray-600', 'hover:border-gray-300', 'dark:hover:text-gray-300');
    });

    // Show the selected panel
    const targetId = target.getAttribute('data-tabs-target');
    if (targetId) {
      const selectedPanel = document.querySelector(targetId);
      if (selectedPanel) {
        selectedPanel.classList.remove('hidden');
      }
    }

    // Set the clicked tab as active
    target.setAttribute('aria-selected', 'true');
    target.classList.remove('border-transparent', 'hover:text-gray-600', 'hover:border-gray-300', 'dark:hover:text-gray-300');
    target.classList.add('text-indigo-600', 'border-indigo-600', 'dark:text-indigo-500', 'dark:border-indigo-500');
  }

  // Add event listeners to tabs
  tabButtons.forEach((tab) => {
    tab.addEventListener('click', handleTabClick);
  });
});
