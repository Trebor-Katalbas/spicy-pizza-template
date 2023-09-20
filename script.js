let ham_btn = document.querySelector('.ham-btn');
let icon = document.querySelector('.bx-menu-alt-right');
let menu = document.querySelector('.nav-res')

// replaces icon
ham_btn.onclick = () => {
    if (icon.classList.contains("bx-menu-alt-right")){
        icon.classList.replace("bx-menu-alt-right","bx-x");
    } else {
        icon.classList.replace("bx-x", "bx-menu-alt-right");
    }
}

// button toggler
ham_btn.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    console.log('clicked');
});