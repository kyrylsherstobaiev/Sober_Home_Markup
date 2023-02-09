function buttonOnTop() {
    let backOnTopButton = document.querySelector('#backOnTopButton');

    window.addEventListener('scroll', watchingScroll);
    backOnTopButton.addEventListener('click', scrollUpTop);

    function watchingScroll() {
        let scrolled = window.scrollY;
        let coords = document.documentElement.clientHeight / 10;
        backOnTopButton.classList.toggle('active', scrolled > coords)
    }

    function scrollUpTop() {
        const c = document.documentElement.scrollTop || document.body.scrollTop;

        if (c > 0) {
            window.requestAnimationFrame(scrollUpTop);
            window.scrollTo(0, c - c / 8)
        }
    }
}

buttonOnTop();