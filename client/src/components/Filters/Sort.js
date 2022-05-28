import React, { useContext } from 'react';
import { Select, Space } from '@mantine/core';
import { CoffeeProductContext } from '../../ProductContext';


const Sort = () => {
    const { setSortBy } = useContext(CoffeeProductContext);

    return (
        <div>
            <Select
                placeholder="Sort by"
                onChange={(e) => setSortBy(e)}
                data={[
                    { value: 'newest', label: 'Newest to Oldest' },
                    { value: 'oldest', label: 'Oldest to Newest' },
                    { value: 'ascending', label: 'Price Ascending' },
                    { value: 'descending', label: 'Price Descending' },
                ]}
            />
            <Space h="md" />
        </div>
    );
};

export default Sort;