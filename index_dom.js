import scrollTopButton from "./button_scroll.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./pruebas_responsive.js";
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
  responsiveMedia(
    "youtube",
    "(min-width:1024px",
    `<a href="https://www.youtube.com/watch?v=1DkDrVEK2rc" target="_blank" rel+"noopener">Ver Video</a>`, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/1DkDrVEK2rc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px",
    `<a href="https://goo.gl/maps/gAtXukMwrUM3ZQzB6" target="_blank" rel+"noopener">Ver Video</a>`,  
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60202.96294476587!2d-99.22792094732561!3d19.426003638461772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201b420c8c849%3A0x84231ae36f6ec524!2sMuseo%20Nacional%20de%20Antropolog%C3%ADa!5e0!3m2!1ses-419!2smx!4v1653081866932!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
    responsiveTester("responsive-tester")
});

d.addEventListener('keydown',e =>{
    shortcuts(e);
    moveBall(e,'.ball','.stage');
})

darkTheme(".dark-theme-btn","dark-mode")