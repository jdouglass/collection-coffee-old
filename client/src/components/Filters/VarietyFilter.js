import React, { useContext } from 'react';
import { Checkbox, CheckboxGroup, Space } from '@mantine/core';
import { CoffeeProductContext } from '../../ProductContext';

const VarietyFilter = () => {
  const { products, setVarietyFilter } = useContext(CoffeeProductContext);
  let varietyList = products.map((item) => item.variety);
  varietyList = varietyList.flat();
  varietyList = [...new Set(varietyList)];
  varietyList.sort();

  return (
    <div>
      <CheckboxGroup
        spacing="xs"
        size="sm"
        onChange={(e) => setVarietyFilter(e)}
        label="Variety"
        orientation='vertical'
      >
        {varietyList.map((variety) => {
          return (
            <Checkbox mr="55px" value={variety} label={variety} key={variety} />
          );
        })}
      </CheckboxGroup>
      <Space h="xs" />
    </div>
  );
};

export default VarietyFilter;