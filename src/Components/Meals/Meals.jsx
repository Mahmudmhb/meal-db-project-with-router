import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals= () => {
    const meals = useLoaderData()
    const totalMeals = meals.meals;
    // console.log(totalMeals.length)
    return (
        <div>
            {/* <h1>this Mealsdb page {totalMeals.length} </h1> */}
            <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr) ", gap:'10px'}}>
                {
                   totalMeals.map(meal => <Meal key={meal.id} meal={meal}> </Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;