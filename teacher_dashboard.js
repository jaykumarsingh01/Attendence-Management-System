function showSection(sectionId) {
    const sections = document.querySelectorAll(".dashboard-section");
    const links = document.querySelectorAll(".sidebar ul li a");
  
    sections.forEach(section => {
      section.style.display = "none";
    });
  
    links.forEach(link => {
      link.classList.remove("active");
    });
  
    const activeSection = document.getElementById(sectionId);
    const activeLink = [...links].find(link => link.textContent.includes(sectionId.charAt(0).toUpperCase() + sectionId.slice(1)));
  
    if (activeSection) activeSection.style.display = "block";
  
    links.forEach(link => {
      if (link.getAttribute("onclick")?.includes(sectionId)) {
        link.classList.add("active");
      }
    });
  }
  
  window.onload = () => {
    showSection("overview");
  };
  