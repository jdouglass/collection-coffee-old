import React, { useContext, useState } from 'react';
import { Checkbox, CheckboxGroup, createStyles, Group, Box, Collapse, Space, UnstyledButton } from '@mantine/core';
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
}));

const VendorFilter = () => {
  const { classes, theme } = useStyles();
  const { products, setVendorFilter } = useContext(CoffeeProductContext);
  let vendorList = products.map((item) => item.vendor);
  vendorList = [...new Set(vendorList)];
  vendorList.sort();

  const [opened, setOpen] = useState(false);

  return (
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
              Vendor
            </Box>
            <Box className={classes.chevron} style={{ transform: opened ? `rotate(${90}deg)` : 'none' }} p={theme.spacing.xs}>
                <i className="fa-solid fa-chevron-right fa-2xs"></i>
            </Box>
          </Group>
      </UnstyledButton>
      <Collapse in={opened}>
        <CheckboxGroup
          spacing="xs"
          size="sm"
          onChange={(e) => setVendorFilter(e)}
          orientation='vertical'
          pl={theme.spacing.xs}
        >
          {vendorList.map((vendor) => {
            return (
              <Checkbox value={vendor} label={vendor} key={vendor} />
            );
          })}
        </CheckboxGroup>
        <Space h='xs'/>
      </Collapse>
    </div>
  );
};

export default VendorFilter;