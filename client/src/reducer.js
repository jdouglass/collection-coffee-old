import { actions } from "./actions";
import { initialState } from "./initialState";

export default function reducer(state, action) {
  switch (action.type) {
    case actions.SET_IS_LOADING:
      return { ...state, isLoading: action.value };
    case actions.SET_PRODUCTS:
      return { ...state, products: action.value };
    case actions.SET_FILTERED_PRODUCTS:
      return { ...state, filteredProducts: action.value };
    case actions.SET_PRICE_RANGE:
      return { ...state, priceRange: action.value };
    case actions.SET_SORT_BY:
      return { ...state, sortBy: action.value };
    case actions.SET_PROCESS_CATEGORY_FILTER:
      return { ...state, processCategoryFilter: action.value };
    case actions.SET_VARIETY_FILTER:
      return { ...state, varietyFilter: action.value };
    case actions.SET_COUNTRY_FILTER:
      return { ...state, countryFilter: action.value };
    case actions.SET_VENDOR_FILTER:
      return { ...state, vendorFilter: action.value };
    case actions.RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
