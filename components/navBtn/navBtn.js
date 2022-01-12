class NavBtn {
    render() {

        const _navBtn = document.querySelector('.navigation__btn');
        const _modal = document.querySelector('.mobile-navigation__list');

        _navBtn.addEventListener('click', () => {
            _navBtn.classList.toggle('active');
            _modal.classList.toggle('visible');
        });
    }

}

const navBtn = new NavBtn();