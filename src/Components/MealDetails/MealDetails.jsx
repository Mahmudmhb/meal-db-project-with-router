import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const MealDetails = () => {
    const meal = useLoaderData();
    const navigate = useNavigate()
    navigate(-1)
    console.log(meal.meals)
    const {strMeal,strMealThumb, idMeal,strInstructions,strArea,strTags} = meal.meals[0];
    return (
        <div style={{border: '2px solid red', borderRadius: '10px',  padding:'10px', width: 'auto%', textAlign: 'center'}}>
            {/* <h1>all meal is here</h1> */}
            <img style={{width:'50%', }} src={strMealThumb} alt="" />
            <h3>{strArea}</h3>
            <h3>{strMeal}</h3>
            <h3>{strTags}</h3>
            <p>{strInstructions}</p>
            {/* <h2><Link to={`/meals/${idMeal}`}>See more details</Link></h2> */}
            <button onClick={(navigate)}> Go Back</button>

        </div>
    );
};

export default MealDetails;