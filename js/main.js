(function() {
const header = document . querySelector('header');
window.onscroll=() => {
    if (window.pageYOffset > 1050) {
        header.classList.add('header-active');
    } else{
        header.classList.remove('header-active');
    }
}
}());