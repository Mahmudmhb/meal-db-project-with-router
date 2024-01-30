import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TotalFood = ({food}) => {
    const navigate = useNavigate()
    const goBack =()=>{
        navigate(-1)
    }
    // console.log(food)
    const {strArea,strMeal,strCategory,strIngredient2, idMeal, strInstructions, strMealThumb, strTags} = food
    return (
        <div style={{border: '2px solid red', borderRadius: '10px',  padding:'10px', textAlign:"center"}}>
            {/* <h1>all meal is here</h1> */}
            <img style={{width:'100%'}} src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            {/* <p>{strInstructions}</p> */}
            <h2><Link to={`/meals/${idMeal}`}>See more details</Link></h2>
            <button onClick={goBack}> Go Back</button>

        </div>
    );
};

export default TotalFood;