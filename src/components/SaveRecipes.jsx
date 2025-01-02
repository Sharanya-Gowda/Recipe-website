import React from 'react';

const SaveRecipes = () => {
    const recipes = {
        "recipes": [
            {
                "label": "Recipe 1",
                "image": "image_url_1",
                "url": "recipe_url_1",
                "ingredients": ["ingredient1", "ingredient2"],
                "mealType": "main"
            },
            {
                "label": "Recipe 2",
                "image": "image_url_2",
                "url": "recipe_url_2",
                "ingredients": ["ingredient1", "ingredient2"],
                "mealType": "dessert"
            }
        ]
    };

    const handleSaveRecipes = () => {
        fetch('http://localhost:5000/api/recipes/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipes),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Recipes saved:', data);
        })
        .catch(error => {
            console.error('Error saving recipes:', error);
        });
    };

    return (
        <div>
            <h1>Save Recipes</h1>
            <button onClick={handleSaveRecipes}>Save Recipes</button>
        </div>
    );
};

export default SaveRecipes;
