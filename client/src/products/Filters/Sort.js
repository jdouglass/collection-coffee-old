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
                defaultValue='newest'
                data={[
                    { value: 'newest', label: 'Newest to Oldest' },
                    { value: 'oldest', label: 'Oldest to Newest' },
                    { value: 'ascending', label: 'Price Ascending' },
                    { value: 'descending', label: 'Price Descending' },
                ]}
            />
            <Space h="xs" />
        </div>
    );
};

export default Sort;