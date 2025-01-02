import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';
import Header from '../../components/header/Header';  
import Card from '../../components/card/Card'; 
import home from '../../assets/home.jpg';

const Home = () => {
    const [query, setQuery] = useState('');
    const [selectedMeal, setSelectedMeal] = useState('breakfast');  // Default value
    const [recipes, setRecipes] = useState(null);
    const [error, setError] = useState('');

    const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack', 'teatime'];
    const appId = process.env.REACT_APP_API_ID;
    const appKey = process.env.REACT_APP_API_KEY;

    const getData = async () => {
        setError('');
        setRecipes(null);
    
        console.log('Selected Meal Type:', selectedMeal);
    
        try {
            if (!mealTypes.includes(selectedMeal)) {
                throw new Error('Invalid meal type selected.');
            }
    
            const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${selectedMeal}`;
            console.log('API URL:', url);
    
            const { data } = await axios.get(url);
    
            console.log('API Response:', data); // Log the API response to check if there are multiple recipes
    
            if (data?.hits?.length > 0) {
                setRecipes(data.hits);
    
                // Map the recipes and send them to your backend for storage in MongoDB
                await axios.post('http://localhost:5000/api/recipes/save', {
                    recipes: data.hits.map(hit => ({
                        label: hit.recipe.label,
                        image: hit.recipe.image,
                        url: hit.recipe.url,
                        ingredients: hit.recipe.ingredients,
                        mealType: selectedMeal,
                    })),
                });
            } else {
                setError('Sorry! Try another food.');
            }
        } catch (error) {
            console.error('Error fetching data:', error.message);
            setError('Failed to fetch data. Please try again.');
        }
    };
    
    return (
        <div>
            <Header 
                query={query}
                setQuery={setQuery}
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                mealTypes={mealTypes}
                getData={getData}
            />

            {!recipes && !error && <img src={home} className="homeimage" alt="home" />}
            {error && <h1 className="errorMessage">{error}</h1>}
            {recipes && recipes.length > 0 && (
                <div className="recipesWrapper">
                    <Card recipes={recipes} />
                </div>
            )}
        </div>
    );
};

export default Home;
