let arrows = document.querySelectorAll(".arrow");
arrows.forEach(arrow => {
  arrow.addEventListener("click", (e) => {
    // Ferme tous les sous-menus sauf celui du clic
    arrows.forEach(a => {
      if (a !== arrow) {
        let parent = a.parentElement.parentElement;
        parent.classList.remove("showMenu");
      }
    });

    // Ouvre ou ferme le sous-menu du clic
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
});

  
      let sidebar = document.querySelector(".sidebar");
      let title = document.querySelectorAll(".titre");
      let sidebarBtn = document.querySelector(".fa-bars");
      let navbar = document.querySelector(".navbar");
  
      sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("close");
  
        if (sidebar.classList.contains("close")) {
          navbar.classList.add("navbar-close");
          navbar.classList.remove("navbar-open");
          title.forEach((element) => {
            element.classList.remove("ferme");
          });
        } else {
          navbar.classList.remove("navbar-close");
          navbar.classList.add("navbar-open");
          title.forEach((element) => {
            element.classList.add("ferme");
          });
        }
      });
  
      let home_section = document.querySelector(".home-section");
      window.addEventListener("resize", function () {
        let mediamax768 = window.matchMedia("(max-width: 768px)");
        if (mediamax768.matches) {
          if (navbar.classList.contains("navbar-close")) {
            navbar.classList.remove("navbar-close");
          } else if (navbar.classList.contains("navbar-open")) {
            navbar.classList.remove("navbar-open");
            sidebar.classList.add("close");
          }
        } else {
          if (home_section.classList.contains("home_section_close")) {
            home_section.classList.remove("home_section_close");
          } else if (sidebar.classList.contains("sidebar_close")) {
            sidebar.classList.remove("sidebar_close");
            sidebar.classList.add("close");
          } else if (sidebar.classList.contains("sidebar_close1")) {
            sidebar.classList.remove("sidebar_close1");
          }
        }
      });
  
      let sidebar_close = document.querySelector(".sidebar_close");
    let side_nav = document.querySelector("#side_nav");

    if (sidebar_close && side_nav) {
        let btn_ferme = document.querySelector(".btn-ferme");
      let side_btn = document.querySelector(".side_btn");
  
      side_btn.addEventListener("click", () => {
        if (sidebar.classList.contains("close")) {
          sidebar.classList.remove("close");
          if (sidebar.classList.contains("sidebar_close")) {
            sidebar.classList.remove("sidebar_close");
            sidebar.classList.remove("sidebar_close1");
            sidebar.classList.add("sidebar_close");
          } else {
            sidebar.classList.add("sidebar_close");
            home_section.classList.add("home_section_close");
          }
        } else {
          if (sidebar.classList.contains("close")) {
            sidebar.classList.remove("close");
            sidebar.classList.remove("sidebar_close");
            sidebar.classList.remove("sidebar_close1");
          } else {
            sidebar.classList.remove("sidebar_close1");
            sidebar.classList.add("sidebar_close");
          }
        }
      });
  
      btn_ferme.addEventListener("click", () => {
        sidebar.classList.add("sidebar_close1");
      });
    }