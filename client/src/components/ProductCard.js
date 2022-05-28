import React, { useContext } from 'react';
import { Card, Image, Text, Badge, Anchor, Group } from '@mantine/core';
import { CoffeeProductContext } from '../ProductContext';

const ProductCard = () => {
    const { filteredProducts, sortBy, priceRange, processCategoryFilter, varietyFilter, countryFilter, merchantFilter } = useContext(CoffeeProductContext);
    filteredProducts.forEach(() => {
        if (sortBy === 'newest') {
            return filteredProducts.sort((a, b) => b.date_added.localeCompare(a.date_added));
        } else if (sortBy === 'oldest') {
            return filteredProducts.sort((a, b) => a.date_added.localeCompare(b.date_added));
        } else if (sortBy === 'ascending') {
            return filteredProducts.sort((a, b) => a.price.localeCompare(b.price));
        } else if (sortBy === 'descending') {
            return filteredProducts.sort((a, b) => b.price.localeCompare(a.price));
        }
        return filteredProducts;
    });

    function filterPrice(item) {
        if (!priceRange.length || priceRange.includes(Infinity) || priceRange.includes(-Infinity)) {
            return item;
        }
        return item.price >= priceRange[0] && item.price <= priceRange[1];
    }

    function filterProcessCategory(item) {
        return !processCategoryFilter.length || processCategoryFilter.includes(item.process_category);
    }

    function filterVariety(item) {
        return !varietyFilter.length || varietyFilter.some(i => item.variety.includes(i));
    }

    function filterCountry(item) {
        return !countryFilter.length || countryFilter.includes(item.country);
    }

    function filterMerchant(item) {
        return !merchantFilter.length || merchantFilter.includes(item.brand);
    }

    let filtered = filteredProducts.filter(item => filterPrice(item) && filterProcessCategory(item) && filterVariety(item) && filterCountry(item) && filterMerchant(item));

    const renderList = filtered.map((product) => {
        const { id, brand, title, price, weight, process, variety, country, image_url, product_url, sold_out, date_added } = product;
        const varietyOutput = variety.join(", ");
        return (
            <div style={{ width: 275, height: 375, margin: 'auto' }} key={id}>
                <Card shadow="sm" p="md">
                    <Card.Section>
                        <Anchor href={product_url} target="_blank" rel="noreferrer">
                            <Image src={image_url} height={200} alt="Coffee beans" />
                        </Anchor>
                    </Card.Section>
                    <Anchor variant="text" href={product_url} target="_blank" rel="noreferrer">
                        <Group position="apart">
                            <Text pt="xs" size="sm">{brand}</Text>
                            <Text pt="xs" size="xs" style={{ lineHeight: 1.5 }}>${price} for {weight}g</Text>
                        </Group>
                        <Text style={{ lineHeight: 1 }} weight={500}>{title}</Text>
                    </Anchor>
                    {/* <Badge color="pink" variant="light">
                                On Sale
                            </Badge> */}
                    <Text size="sm" style={{ lineHeight: 1.5 }}>{country}</Text>
                    <Text size="sm" style={{ lineHeight: 1 }}>{process}</Text>
                    <Text size="sm" style={{ lineHeight: 1.5 }}>{varietyOutput}</Text>
                    {/* <Text size="xs" style={{ lineHeight: 0.5 }}>{date_added}</Text> */}
                </Card>
            </div>
        );
    });

    return (
        <>{renderList}</>
    );
};

export default ProductCard;