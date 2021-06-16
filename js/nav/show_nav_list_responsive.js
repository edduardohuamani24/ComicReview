import { rotateRods } from "./rotate_button_ham.js";
const ham = document.querySelector(".nav__hamburger");
const list = document.querySelector(".nav__list");
export const openCloseHam = () => {
  //El botón hamburguesa se le agregá un evento list que es una función anónimma.
  ham.addEventListener("click", () => {
    //Usamos el método toggle mediante la propiedad a la lista
    //El método toggle permite agregar la clase nav__list-activate si existe y si ya la tiene la remueve.
    list.classList.toggle("nav__list-activate");
    rotateRods();
  });
};
