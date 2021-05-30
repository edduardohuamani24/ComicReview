import { iconSearch } from "./show_input_search.js";
import { validateInputSearch } from "./validate_input_search.js";
import { showHideNav } from "./show_hide_nav.js";
iconSearch.addEventListener("click", validateInputSearch);
showHideNav();
