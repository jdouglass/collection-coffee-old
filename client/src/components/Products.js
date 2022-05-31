import React from 'react'
import ProductCard from '../components/ProductCard'
import { SimpleGrid } from '@mantine/core'

const Products = () => {
    return (
        <SimpleGrid
            cols={5}
            style={{ maxWidth: 1500 }}
            align="flex-start"
            breakpoints={[
                { maxWidth: 1720, cols: 4, spacing: 'sm' },
                { maxWidth: 1450, cols: 3, spacing: 'sm' },
                { maxWidth: 1160, cols: 2, spacing: 'sm' },
                { maxWidth: 875, cols: 1, spacing: 'sm' },
            ]}
        >
            <ProductCard />
        </SimpleGrid>
    )
}

export default Products