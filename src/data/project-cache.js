// Cache untuk menyimpan data project yang sudah di-load
let projectCache = null;

// Fungsi untuk get project data dengan caching
export const getProjectData = () => {
  if (!projectCache) {
    // Import data hanya saat pertama kali dibutuhkan
    import('./project-data.js').then(module => {
      projectCache = module.projectData;
    });
  }
  return projectCache;
};

// Fungsi untuk get single project dengan optimasi
export const getProjectById = (id) => {
  const data = getProjectData();
  if (!data) return null;
  
  return data.find(project => project.id === Number(id));
};

// Pre-load data untuk performa yang lebih baik
if (typeof window !== 'undefined') {
  // Pre-load data di browser
  setTimeout(() => {
    getProjectData();
  }, 100);
}
