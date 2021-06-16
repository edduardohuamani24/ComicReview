import { closeSearchInput } from "./close_input_search.js";
import { inputSearch, showSearchInput } from "./show_input_search.js";

export const validateInputSearch = () => {
  if (inputSearch.classList.contains("search-responsive")) {
    showSearchInput();
  } else {
    closeSearchInput();
  }
};
