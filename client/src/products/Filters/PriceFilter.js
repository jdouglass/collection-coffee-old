import React, { useContext, useState } from 'react';
import { RangeSlider, Space, createStyles, Collapse, Box, Group, UnstyledButton } from '@mantine/core';
import { CoffeeProductContext } from '../../ProductContext';

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    paddingLeft: `${theme.spacing.xs}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    alignContent: 'left',
    borderTop: '1px solid',
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },

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

const PriceFilter = () => {
  const { classes, theme } = useStyles();
  const { products, setPriceRange, isLoading } = useContext(CoffeeProductContext);
  let minPrice;
  let maxPrice;
  if (!isLoading) {
    minPrice = Math.min(...products.map(item => item.price));
    maxPrice = Math.max(...products.map(item => item.price));
  }

  const [opened, setOpen] = useState(false);

  return (
    <div>
      {!isLoading &&
        <div>
          <UnstyledButton 
            size="sm" 
            weight={500} 
            onClick={() => setOpen((o) => !o)}
            className={classes.control}
            radius='xs'
          >
            <Group position='apart' spacing={0}>
              <Box>
                Price
              </Box>
              <Box className={classes.chevron} style={{ transform: opened ? `rotate(${90}deg)` : 'none' }} p={theme.spacing.xs}>
                  <i className="fa-solid fa-chevron-right fa-2xs"></i>
              </Box>
            </Group>
          </UnstyledButton>
          <Collapse in={opened}>
            <RangeSlider
              onChange={(e) => setPriceRange(e)}
              min={minPrice}
              max={maxPrice}
              step={1}
              minRange={1}
              labelAlwaysOn
              classNames={classes}
              pt={theme.spacing.xs}
              style={{paddingLeft: theme.spacing.xs, maxWidth: 207}}
            />
            <Space h="xs" />
          </Collapse>
        </div>
      }
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default PriceFilter;