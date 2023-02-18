
window.onload = function () {
    //var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    breadcrumbInit();
}

function breadcrumbInit() {
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburger = document.getElementById("mobile-menu-open")
    const menuClose = document.getElementById("mobile-menu-close");

    if (hamburger && menuClose) {
        hamburger.addEventListener("click", function () {
            mobileMenu.classList.remove('hidden');
            menuClose.classList.remove('hidden')
            hamburger.classList.add("hidden")
        });

        menuClose.addEventListener("click", function () {
            mobileMenu.classList.add('hidden');
            menuClose.classList.add('hidden')
            hamburger.classList.remove("hidden")
        })
    }

}