import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData()
    return (
        <div>
            <h1>All Phone is here length:{phones.length}</h1>
        </div>
    );
};

export default Phones;