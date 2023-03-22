import * as flsFunctions from "./modules/functions.js";
import Tick  from "./modules/flip.min.js";

flsFunctions.isWebp();

/*
For example:
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/
document.addEventListener('DOMContentLoaded', (e) => {
    flsFunctions.showPopup();
});
document.getElementById("getYear").innerHTML = (new Date().getFullYear());
