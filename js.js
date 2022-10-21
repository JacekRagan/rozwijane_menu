let menu = document.getElementById("menu");
let schowaj = document.getElementById("schowaj");
let wyswietl = document.getElementById("wyswietl")
let licznik = 0;
function zrob(){
    wyswietl.style.opacity = 0;
    menu.style.opacity = 1;
    menu.style.animation = '2s ease-in zawijanie';
}
function nzrob(){
    wyswietl.style.opacity = 1;
    menu.style.opacity = 0;
    menu.style = " ";
    
}

