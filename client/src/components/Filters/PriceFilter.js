import React, { useContext } from 'react';
import { RangeSlider, Space, Text, createStyles } from '@mantine/core';
import { CoffeeProductContext } from '../../ProductContext';

const PriceFilter = () => {
  const { products, setPriceRange, isLoading } = useContext(CoffeeProductContext);
  let minPrice;
  let maxPrice;
  if (!isLoading) {
    minPrice = Math.min(...products.map(item => item.price));
    maxPrice = Math.max(...products.map(item => item.price));
  }

  const useStyles = createStyles((theme) => ({
    label: {
      top: 0,
      height: 20,
      lineHeight: '28px',
      width: 30,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 700,
      backgroundColor: 'transparent',
    },
  
    thumb: {
      backgroundColor: theme.colors[theme.primaryColor][6],
      height: 20,
      width: 30,
      border: 'none',
    },
  
    dragging: {
      transform: 'translate(-50%, -50%)',
    },
  }));

  const { classes } = useStyles();


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
            labelAlwaysOn
            classNames={classes}
            pt={5}
            style={{paddingLeft: 6, maxWidth: 216}}
          />
          <Space h="xs" />
        </div>
      }
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default PriceFilter;