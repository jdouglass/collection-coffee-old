import React, { useContext } from 'react';
import { Checkbox, CheckboxGroup } from '@mantine/core';
import { CoffeeProductContext } from '../../ProductContext';

const VendorFilter = () => {
  const { products, setVendorFilter } = useContext(CoffeeProductContext);
  let vendorList = products.map((item) => item.vendor);
  vendorList = [...new Set(vendorList)];
  vendorList.sort();

  return (
    <CheckboxGroup
      spacing="xs"
      size="sm"
      onChange={(e) => setVendorFilter(e)}
      label="Vendor"
      orientation='vertical'
    >
      {vendorList.map((vendor) => {
        return (
          <Checkbox value={vendor} label={vendor} key={vendor} />
        );
      })}
    </CheckboxGroup>
  );
};

export default VendorFilter;