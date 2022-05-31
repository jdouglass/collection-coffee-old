import React, { useContext } from 'react';
import { Checkbox, CheckboxGroup } from '@mantine/core';
import { CoffeeProductContext } from '../../ProductContext';

const ProcessFilter = () => {
  const { setMerchantFilter } = useContext(CoffeeProductContext);

  const merchantList = ['Subtext', 'Monogram'];

  return (
    <CheckboxGroup
      spacing="xs"
      size="sm"
      onChange={(e) => setMerchantFilter(e)}
      label="Merchant"
      orientation='vertical'
    >
      {merchantList.map((merchant) => {
        return (
          <Checkbox value={merchant} label={merchant} key={merchant} />
        );
      })}
    </CheckboxGroup>
  );
};

export default ProcessFilter;