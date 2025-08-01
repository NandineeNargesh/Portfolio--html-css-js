
document.getElementById("see-more-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const moreProjects = document.querySelector(".more-projects");

  if (moreProjects.style.display === "none" || moreProjects.style.display === "") {
    moreProjects.style.display = "grid";
    this.textContent = "See Less";
  } else {
    moreProjects.style.display = "none";
    this.textContent = "See More";
  }
});



   var sidemenu = document.getElementById("sidemenu");
    function openmenu() {
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-100%"
    }

    // ✅ This JS adds/removes the 'scrolled' class on nav
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    for (tab of tabcontents) {
        tab.classList.remove("active-content");
    }
    for (tab of tablinks) {
        tab.classList.remove("active-link");
    }
    document.getElementById(tabname).classList.add("active-content");
    event.currentTarget.classList.add("active-link");
}
function showSuccessPopup() {
  const popup = document.getElementById("success-popup");
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2000); // hides after 2 seconds
}