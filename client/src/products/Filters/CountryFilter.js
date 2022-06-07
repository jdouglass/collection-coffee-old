import React, { useContext } from 'react';
import { Checkbox, CheckboxGroup, Space } from '@mantine/core';
import { CoffeeProductContext } from '../../ProductContext';

const CountryFilter = () => {
  const { products, setCountryFilter } = useContext(CoffeeProductContext);
  let countryList = products.map((item) => item.country);
  countryList = [...new Set(countryList)];
  countryList.sort();

  return (
    <div>
      <CheckboxGroup
        spacing="xs"
        size="sm"
        onChange={(e) => setCountryFilter(e)}
        label="Country"
        orientation='vertical'
      >
        {countryList.map((country) => {
          return (
            <Checkbox mr="5px" value={country} label={country} key={country} />
          );
        })}
      </CheckboxGroup>
      <Space h="md" />
    </div>
  );
};

export default CountryFilter;