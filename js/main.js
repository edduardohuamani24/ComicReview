/*IMPORTAR IMÁGENES */
import cover_1 from "./../img/entre_los_muertos.jpg";
import cover_2 from "./../img/veneno_greatest_hits.jpg";

/*IMPORTAR FUNCIONES */
import { iconSearch } from "./header/show_input_search.js";
import { validateInputSearch } from "./header/validate_input_search.js";
import { showHideNav } from "./nav/show_hide_nav.js";
import { openCloseHam } from "./nav/show_nav_list_responsive.js";
import "./../css/header/header.css";
import "./../css/nav/nav.css";
import "./../css/main/main.css";
import "./../css/footer/footer.css";
iconSearch.addEventListener("click", validateInputSearch);
showHideNav();
openCloseHam();

//ENLAZAR CON CONTENEDORES DE LAS IMÁGENES
const cover_container_1 = document.getElementById("img_container_01");
const cover_container_2 = document.getElementById("img_container_02");

//Llenar con los contenedores
cover_container_1.innerHTML = `<img id="cover_1" class="comic__cover" src="${cover_1}"
                  alt="Portada del comic Spiderman Entre los muertos">`;

cover_container_2.innerHTML = `<img id="cover_2" class="comic__cover" src="${cover_2}"
                  alt="Portada del comic Veneno greatest hits">`;
