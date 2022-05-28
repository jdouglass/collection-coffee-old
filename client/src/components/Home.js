import React, { useEffect, useContext } from 'react';
import { AppShell, Navbar, Header } from '@mantine/core';
import Products from './Products';
import Filter from './Filters/Filters';
import ProductFetcher from '../ProductFetcher';
import { CoffeeProductContext } from '../ProductContext';
import Brand from './Brand';

const Home = () => {
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
        <AppShell
            padding="md"
            header={
                <Header height={60} pl={30}>
                    <Brand />
                </Header>}
            navbar={<Navbar hiddenBreakpoint="lg" width={{ base: 260 }} p="md">
                <Filter />
            </Navbar>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            <Products />
        </AppShell>
    );
};

export default Home;