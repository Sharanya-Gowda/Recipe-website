import React from 'react';
import './Card.css';
import {useNavigate} from "react-router-dom";

const Card = ({ recipes }) => {
    const navigate=useNavigate();
    console.log(recipes);  

    return (
        <div className="card">
            {recipes?.map(( {recipe} , index) => {
                return (
                    <div className="cardWrapper" key={index}>
                        <h1>{recipe?.label}</h1>
                        <img src={recipe?.image} alt="food" />
                        <button onClick={()=>navigate("detail",{state:recipe})}>More details</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
