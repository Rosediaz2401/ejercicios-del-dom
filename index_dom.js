import scrollTopButton from "./button_scroll.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm } from "./reloj.js";
import { moveBall,shortcuts } from "./teclado.js";
//import scrollTopButton from "./button_scroll.js";
//import countdown from "./cuenta_regresiva.js";
import darkTheme from "./tema_oscuro.js";

const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    digitalClock('#reloj','#activar-reloj','#desactivar-reloj')
    alarm('assets/mixkit-digital-clock-digital-alarm-buzzer-992.wav','#activar-alarma','#desactivar-alarma')
    //countdown("countdown","January 24, 2023 08:23:23","Feliz Cumpleanos Rose")
    scrollTopButton(".scroll-top-btn")
    darkTheme(".dark-theme-btn","dark-mode")
});

d.addEventListener('keydown',e =>{
    shortcuts(e);
    moveBall(e,'.ball','.stage');
})
