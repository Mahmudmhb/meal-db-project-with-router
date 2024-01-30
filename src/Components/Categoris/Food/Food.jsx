import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TotalFood from '../TotalFood/TotalFood';

const Food = () => {
    const foods = useLoaderData()
    const totalFood = foods.meals
    // console.log(totalFood)
    return (
        <div>
            {/* <h2>this is food page {foods.meals.length}</h2> */}
            <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr) ", gap:'10px'}}>
               {
                totalFood.map(food => <TotalFood key={food.mealsId} food={food}></TotalFood>)
               }
            </div>
        </div>
    );
};

export default Food;