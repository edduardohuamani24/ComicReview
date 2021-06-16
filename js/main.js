import { iconSearch } from "./header/show_input_search.js";
import { validateInputSearch } from "./header/validate_input_search.js";
import { showHideNav } from "./nav/show_hide_nav.js";
import { openCloseHam } from "./nav/show_nav_list_responsive.js";
iconSearch.addEventListener("click", validateInputSearch);
showHideNav();
openCloseHam();
