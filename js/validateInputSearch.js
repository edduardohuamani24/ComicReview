import { closeSearchInput } from "./closeInputSearch.js";
import {
  icon_search,
  input_search,
  showSearchInput,
} from "./showInputSearch.js";
const validateInputSearch = () => {
  if (input_search.classList.contains("search-responsive")) {
    showSearchInput();
  } else {
    closeSearchInput();
  }
};
icon_search.addEventListener("click", validateInputSearch);
