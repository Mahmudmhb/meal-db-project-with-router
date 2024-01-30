import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FoodCategory = ({category}) => {
    const navigate = useNavigate()
    const goBack =()=>{
        navigate(-1)
    }
    // console.log(category)
    const {idCategory,strCategory, strCategoryThumb,strCategoryDescription} = category;
    return (
        <div style={{border: '2px solid red', borderRadius: '10px',  padding:'10px', width: 'auto%', textAlign: 'center'}}>
           <Link to={`/categories/${strCategory}`}>
           <img src={strCategoryThumb} alt="" />
            <h3>{strCategory}</h3>
           </Link>
           <button onClick={goBack}> Go Back</button>
        </div>
    );
};

export default FoodCategory;