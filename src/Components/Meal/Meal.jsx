import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({meal}) => {
    // console.log(meal)
    const {strMeal,strMealThumb, idMeal,strInstructions,strArea,strTags} = meal;
    return (
        <div style={{border: '2px solid red', borderRadius: '10px',  padding:'10px'}}>
            {/* <h1>all meal is here</h1> */}
            <img style={{width:'100%'}} src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            {/* <p>{strInstructions}</p> */}
            <h2><Link to={`/meals/${idMeal}`}>See more details</Link></h2>

        </div>
    );
};

export default Meal;