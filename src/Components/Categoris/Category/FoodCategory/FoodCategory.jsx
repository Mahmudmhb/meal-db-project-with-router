import React from 'react';
import { Link } from 'react-router-dom';

const FoodCategory = ({category}) => {
    console.log(category)
    const {idCategory,strCategory, strCategoryThumb,strCategoryDescription} = category;
    return (
        <div style={{border: '2px solid red', borderRadius: '10px',  padding:'10px', width: 'auto%', textAlign: 'center'}}>
           <Link to={`categoris/${strCategory}`}>
           <img src={strCategoryThumb} alt="" />
            <h3>{strCategory}</h3>
           </Link>
        </div>
    );
};

export default FoodCategory;