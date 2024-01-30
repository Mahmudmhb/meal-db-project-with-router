import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCategory from './FoodCategory/FoodCategory';

const Category = () => {
    const data = useLoaderData()
    const categories = data.categories;
    // console.log(categories)
    return (
        <div>
            <h2>total category : {categories.length}</h2>
            <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr) ", gap:'10px'}}>
                {
                    categories.map(category => <FoodCategory key={category.idCategory} category= {category}></FoodCategory>)
                }
            </div>
        </div>
    );
};

export default Category;