import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const MealDetails = () => {
    const meal = useLoaderData();
    const navigate = useNavigate()
    const goBackTOPage =()=>{

        navigate(-1)
    }
    console.log(meal.meals)
    const {strMeal,strMealThumb, idMeal,strInstructions,strArea,
        strTags,strIngredient1, strIngredient2, strIngredient3,strIngredient4,strIngredient6} = meal.meals[0];
    return (
        <div style={{border: '2px solid red', margin:'20px', borderRadius: '10px',  padding:'20px', width: 'auto%', textAlign: 'center'}}>
            {/* <h1>all meal is here</h1> */}
            <img style={{width:'50%', }} src={strMealThumb} alt="" />
            <h3>{strArea}</h3>
            <h3>{strMeal}</h3>
            <h3>{strTags}</h3>
            <p>{strIngredient1}</p>
            <p>{strIngredient2}</p>
            <p>{strIngredient3}</p>
            <p>{strIngredient4}</p>
            <p>{strIngredient6}</p>
            <p>{strInstructions}</p>
            {/* <h2><Link to={`/meals/${idMeal}`}>See more details</Link></h2> */}
            <button style={{background:'blue' , padding:'10px', color:"white" , borderRadius:'10px', fontSize:'20px'}} onClick={(goBackTOPage)}> Go Back</button>

        </div>
    );
};

export default MealDetails;