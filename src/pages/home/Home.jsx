import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';
import Header from '../../components/header/Header';  
import Card from '../../components/card/Card'; 
import home from '../../assets/home.jpg';

const Home = () => {
    const [query, setQuery] = useState('');  // Default query
    const [selectedMeal, setSelectedMeal] = useState('');  // Default meal type
    const [recipes, setRecipes] = useState(null);  // Store recipes
    const [error, setError] = useState('');  // Track errors

    const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack', 'teatime'];

    const appId = process.env.REACT_APP_API_ID;
    const appKey = process.env.REACT_APP_API_KEY;

    

    //const proxy = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${selectedMeal}`;

    const getData = async () => {
        setError('');  // Clear previous errors
        setRecipes(null);  // Reset recipes

        try {
            const { data } = await axios.get(url);  // Use proxy to handle CORS issues
            console.log('API Response:', data);

            if (data?.hits && data?.hits?.length > 0) {
                setRecipes(data?.hits);  // Update with valid results
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
            {/* Header Component */}
            <Header 
                query={query}
                setQuery={setQuery}
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                mealTypes={mealTypes} 
                getData={getData}
            />

            {/* Home image if no search or error */}
            {!recipes && !error && (
                <img src={home} className="homeimage" alt="home" />
            )}

            {/* Display error message if API request fails */}
            {error && <h1 className="errorMessage">{error}</h1>}

            {/* Display 'Sorry!' message if no recipes found */}
            {recipes && recipes?.length === 0 && (
                <h1 className="noResultsMessage">Sorry! Try another food.</h1>
            )}

            {/* Display recipes if available */}
            {recipes && recipes.length > 0 && (
    <div className="recipesWrapper">
        <Card recipes={recipes} />  {/* Pass the entire recipes array as a prop */}
    </div>
)}

        </div>
    );
};

export default Home;
