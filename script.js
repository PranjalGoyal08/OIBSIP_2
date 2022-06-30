function navcolor(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        navbar.classList.remove('sticky');
    }
    else{
        navbar.classList.add('sticky');
    }
}
window.addEventListener('scroll', navcolor);