import React, { useContext } from 'react';
import { RangeSlider, Space, Text } from '@mantine/core';
import { CoffeeProductContext } from '../../ProductContext';

const PriceFilter = () => {
  const { products, setPriceRange, isLoading } = useContext(CoffeeProductContext);
  let minPrice;
  let maxPrice;
  if (!isLoading) {
    minPrice = Math.min(...products.map(item => item.price));
    maxPrice = Math.max(...products.map(item => item.price));
  }


  return (
    <div>
      {!isLoading &&
        <div>
          <Text size="sm" weight={500}>Price</Text>
          <RangeSlider
            onChange={(e) => setPriceRange(e)}
            min={minPrice}
            max={maxPrice}
            step={1}
            minRange={1}
          />
          <Space h="xs" />
        </div>
      }
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default PriceFilter;