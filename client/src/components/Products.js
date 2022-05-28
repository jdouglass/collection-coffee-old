import React from 'react'
import ProductCard from '../components/ProductCard'
import { SimpleGrid } from '@mantine/core'

const Products = () => {
    return (
        <SimpleGrid
            cols={11}
            spacing="md"
            breakpoints={[
                { maxWidth: 3400, cols: 10, spacing: 'md' },
                { maxWidth: 3100, cols: 9, spacing: 'md' },
                { maxWidth: 2900, cols: 8, spacing: 'md' },
                { maxWidth: 2600, cols: 7, spacing: 'md' },
                { maxWidth: 2300, cols: 6, spacing: 'md' },
                { maxWidth: 2000, cols: 5, spacing: 'md' },
                { maxWidth: 1725, cols: 4, spacing: 'md' },
                { maxWidth: 1435, cols: 3, spacing: 'md' },
                { maxWidth: 900, cols: 2, spacing: 'md' },
                { maxWidth: 600, cols: 1, spacing: 'md' },
            ]}>
            <ProductCard />
        </SimpleGrid>
    )
}

export default Products