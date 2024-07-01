/* ==================== Show Sidebar ==================== */
const showSidebar = (toggleId, sidebarId, mainId) => {
  const toggle = document.getElementById(toggleId);
  const sidebar = document.getElementById(sidebarId);
  const main = document.getElementById(mainId);

  if (toggle && sidebar && main) {
    toggle.addEventListener("click", () => {
      // Show Sidebar
      sidebar.classList.toggle("show__sidebar");
      // Add Padding main
      main.classList.toggle("main__pd");
    });
  }
};
showSidebar("header-toggle", "sidebar", "main");

/* ==================== Active Link ==================== */
const sidebarLink = document.querySelectorAll(".sidebar__link");

function linkColor() {
  sidebarLink.forEach((l) => l.classList.remove("active__link"));
  this.classList.add("active__link");
}

sidebarLink.forEach((l) => l.addEventListener("click", linkColor));
