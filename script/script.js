const toTop = document.querySelector('.to-top');

window.onscroll = () => {
    if(window.scrollY > 100){
        toTop.style.display = 'flex';
    } else {
        toTop.style.display = 'none';
    }
};


toTop.onclick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
}