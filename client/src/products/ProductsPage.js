import React, { useEffect, useContext } from 'react';
import { AppShell, Navbar, Container } from '@mantine/core';
import DoubleHeader from '../common/HeaderBar';
import Products from './ProductsList';
import Filter from './Filters/Filters';
import ProductFetcher from '../ProductFetcher';
import { CoffeeProductContext } from '../ProductContext';

const ProductsPage = () => {
    const { setProducts, setFilteredProducts, setIsLoading } = useContext(CoffeeProductContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const response = await ProductFetcher("/");
                setProducts(response.data.data);
                setFilteredProducts(response.data.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <Container size={1920}>
            <AppShell
                padding="md"
                header={<DoubleHeader/>}
                navbar={<Navbar hiddenBreakpoint="lg" width={{ base: 260 }} p="md">
                    <Filter />
                </Navbar>}
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}
            >
                <Products />
            </AppShell>
        </Container>
    );
};

export default ProductsPage;