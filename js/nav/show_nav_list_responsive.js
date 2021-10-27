import { rotateRods } from "./rotate_button_ham.js";
import { hideScrollbar } from "./hide_scrollbar.js";

const ham = document.querySelector(".nav__hamburger");
const list = document.querySelector(".nav__list");
const search_button = document.getElementById("search-button");
const search_input = document.getElementById("search-input");
export const openCloseHam = () => {
  //El botón hamburguesa se le agregá un evento list que es una función anónimma.
  ham.addEventListener("click", () => {
    //Usamos el método toggle mediante la propiedad a la lista
    //El método toggle permite agregar la clase nav__list-activate si existe y si ya la tiene la remueve.
    list.classList.toggle("nav__list-activate");
    search_button.classList.toggle("elem-hidden");
    search_input.classList.toggle("elem-hidden");
    rotateRods();
    /*Quitar barra espaciadora horizontal */
    hideScrollbar();
  });
};
