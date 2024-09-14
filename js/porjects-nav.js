const option = document.querySelector(".mobile-nav-item");

let show = false
function showOptions(){
    if (!show) {
        option.style.right = '0';
        show = true
    } else {
        option.style.right ='-100%';
        show = false;
    }
    
}