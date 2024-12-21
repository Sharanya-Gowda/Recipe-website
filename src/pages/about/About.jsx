import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>
                Welcome to our Recipe Explorer! This application is designed to provide food enthusiasts with easy access to a wide variety of recipes, 
                detailed nutritional information, and personalized recommendations. Whether you're a professional chef or a home cook, 
                our platform helps you discover new dishes and explore healthy meal options.
            </p>

            <h2>Our Mission:</h2>
            <p>
                Our goal is to inspire culinary creativity by offering a rich collection of recipes from around the world. 
                We aim to empower users with not only delicious meal ideas but also the tools to make informed dietary choices.
            </p>

            <h2>What We Offer:</h2>
            <ul>
                <li>
                    <b>Detailed Recipes:</b> Discover ingredients, cooking instructions, and preparation tips for each dish.
                </li>
                <li>
                    <b>Nutritional Insights:</b> View calories, protein, fats, and other key nutrients to plan your meals better.
                </li>
                <li>
                    <b>Health and Dietary Labels:</b> Easily find recipes that align with your lifestyle, such as vegan, keto, or gluten-free.
                </li>
                <li>
                    <b>User-Friendly Experience:</b> Explore recipes by cuisine type, meal type, or dietary preferences in a simple and elegant interface.
                </li>
            </ul>

            <h2>Your Privacy Matters:</h2>
            <p>
                We take user privacy seriously. Some pages are accessible only to logged-in users, ensuring a personalized and secure browsing experience.
            </p>
            <p>Happy Cooking! 😊</p>
        </div>
    );
};

export default About;
