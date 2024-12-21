import React from 'react';
import "./Detail.css";
import { useLocation } from "react-router-dom";

const Detail = () => {
    const { state } = useLocation(); // Retrieve the passed recipe data
    const { 
        label, 
        image, 
        calories, 
        ingredientLines, 
        totalNutrients, 
        healthLabels, 
        dietLabels, 
        cautions, 
        cuisineType, 
        mealType, 
        dishType
    } = state;

    // Helper to render list items dynamically
    const renderList = (items) => items.map((item, index) => <li key={index}>{item}</li>);

    // Helper to render nutrients dynamically
    const renderNutrients = (nutrients) =>
        Object.entries(nutrients).map(([key, nutrient]) => (
            <div key={key} className="nutrient">
                <p>
                    <strong>{nutrient.label}:</strong> {Math.round(nutrient.quantity)} {nutrient.unit}
                </p>
            </div>
        ));

    return (
        <div className="detailWrapper">
            <div className="imgWrapper">
                <h1>{label}</h1>
                <img src={image} alt={label} className="foodImage" />
            </div>

            <div className="ingredientsWrapper">
                <h4>Ingredients</h4>
                <ul>{renderList(ingredientLines)}</ul>
            </div>

            <div className="labelsWrapper">
                <h4>Health & Diet Labels</h4>
                <ul>{renderList(healthLabels)}</ul>
                {dietLabels.length > 0 && (
                    <>
                        <h4>Diet Labels</h4>
                        <ul>{renderList(dietLabels)}</ul>
                    </>
                )}
                {cautions.length > 0 && (
                    <>
                        <h4>Cautions</h4>
                        <ul>{renderList(cautions)}</ul>
                    </>
                )}
            </div>

            <div className="infoWrapper">
                <h4>Recipe Info</h4>
                <p><strong>Calories:</strong> {Math.round(calories)} kcal</p>
                <p><strong>Cuisine:</strong> {cuisineType.join(', ')}</p>
                <p><strong>Meal Type:</strong> {mealType.join(', ')}</p>
                <p><strong>Dish Type:</strong> {dishType.join(', ')}</p>
            </div>

            <div className="nutrientsWrapper">
                <h4>Nutrients</h4>
                {renderNutrients(totalNutrients)}
            </div>
        </div>
    );
};

export default Detail;
