import React, { createContext, useReducer } from 'react';
import Home from './components/Home';
import { actions } from './actions';
import reducer from './reducer';
import { initialState } from './initialState';

export const CoffeeProductContext = createContext();

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    isLoading: state.isLoading,
    products: state.products,
    filteredProducts: state.filteredProducts,
    priceRange: state.priceRange,
    sortBy: state.sortBy,
    processCategoryFilter: state.processCategoryFilter,
    varietyFilter: state.varietyFilter,
    countryFilter: state.countryFilter,
    vendorFilter: state.vendorFilter,
    setIsLoading: value => {
      dispatch({ type: actions.SET_IS_LOADING, value });
    },
    setProducts: value => {
      dispatch({ type: actions.SET_PRODUCTS, value });
    },
    setFilteredProducts: value => {
      dispatch({ type: actions.SET_FILTERED_PRODUCTS, value });
    },
    setPriceRange: value => {
      dispatch({ type: actions.SET_PRICE_RANGE, value });
    },
    setSortBy: value => {
      dispatch({ type: actions.SET_SORT_BY, value });
    },
    setProcessCategoryFilter: value => {
      dispatch({ type: actions.SET_PROCESS_CATEGORY_FILTER, value });
    },
    setVarietyFilter: value => {
      dispatch({ type: actions.SET_VARIETY_FILTER, value });
    },
    setCountryFilter: value => {
      dispatch({ type: actions.SET_COUNTRY_FILTER, value });
    },
    setVendorFilter: value => {
      dispatch({ type: actions.SET_VENDOR_FILTER, value });
    },
    reset: () => {
      dispatch({ type: actions.RESET });
    }
  };

  return (
    <CoffeeProductContext.Provider value={value}>
      {children}
    </CoffeeProductContext.Provider>
  );
}

export default function ProductContext() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

