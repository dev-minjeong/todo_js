const hidden = document.querySelector(".hidden");
const menubtn = document.querySelector("footer #menubtn");

function menuOpen() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("open");
    menubtn.classList.toggle("open");
    
    if(menu.className == 'open'&& menubtn.className == 'open') {
        menu.style.left = "0";
        menubtn.value = "close";
    } else {
        menu.style.left = "-300px";
        menubtn.value = "menu";
    }
}

menubtn.addEventListener("click", menuOpen);