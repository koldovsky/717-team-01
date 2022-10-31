(function () {

    const iconBurger = document.querySelector('.header__navigatin-burger');
    const navigationsBudy = document.querySelector('.navigation-wrapper');
    iconBurger.addEventListener("click", function (e) {
        document.body.classList.toggle("lock");
        iconBurger.classList.toggle("active");
        navigationsBudy.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".navigation__link");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", (_) => {
                if (iconBurger.classList.contains("active")) {
                    document.body.classList.remove("lock");
                    iconBurger.classList.remove("active");
                    navigationsBudy.classList.remove("active");
                }
            }
        );
    });
})();