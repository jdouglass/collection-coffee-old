import React, { useContext } from 'react';
import { CheckboxGroup, Checkbox, Space } from '@mantine/core';
import { CoffeeProductContext } from '../../ProductContext';

const ProcessFilter = () => {
  const { setProcessCategoryFilter } = useContext(CoffeeProductContext);

  return (
    <div>
      <CheckboxGroup
        spacing="xs"
        size="sm"
        onChange={(e) => setProcessCategoryFilter(e)}
        label="Process"
        orientation='vertical'
      >
        <Checkbox value="Washed" label="Washed" />
        <Checkbox value="Natural" label="Natural" />
        <Checkbox value="Honey" label="Honey" />
        <Checkbox value="Experimental" label="Experimental" />
      </CheckboxGroup>
      <Space h="md" />
    </div>
  );
};

export default ProcessFilter;