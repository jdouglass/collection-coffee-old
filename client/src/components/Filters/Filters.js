import React from 'react';
import ProcessCategoryFilter from './ProcessCategoryFilter';
import Sort from './Sort';
import VarietyFilter from './VarietyFilter';
import PriceFilter from './PriceFilter';
import CountryFilter from './CountryFilter';
import MerchantFilter from './MerchantFilter';

const Filters = () => {
    return (
        <div>
            <Sort />
            <PriceFilter />
            <ProcessCategoryFilter />
            <VarietyFilter />
            <CountryFilter />
            <MerchantFilter />
        </div>
    );
};

export default Filters;
