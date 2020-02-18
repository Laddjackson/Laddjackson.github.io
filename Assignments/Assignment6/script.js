function toggleNav(){
    let navItems = document.getElementById("main-nav-items");
    let navItems2 = document.getElementById("main-nav-items-add");
    let navItems3 = document.getElementById("main-banner-list")
    navItems.classList.toggle("hidden");
}

const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;