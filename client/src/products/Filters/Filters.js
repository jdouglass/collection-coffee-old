import React from 'react';
import ProcessCategoryFilter from './ProcessCategoryFilter';
import Sort from './Sort';
import VarietyFilter from './VarietyFilter';
import PriceFilter from './PriceFilter';
import CountryFilter from './CountryFilter';
import VendorFilter from './VendorFilter';
import { Title, Group, Box } from '@mantine/core';

const Filters = () => {
    return (
        <div>
            <Title
                order={3}
                pb='xs'
            >
                <Group>
                    <Box mr={-5}>
                        <i class="fa-solid fa-sliders"></i>
                    </Box>
                    <Box ml={0}>
                        Filters
                    </Box>
                </Group>
            </Title>
            <Sort />
            <PriceFilter />
            <VendorFilter />
            <CountryFilter />
            <ProcessCategoryFilter />
            <VarietyFilter />
        </div>
    );
};

export default Filters;
