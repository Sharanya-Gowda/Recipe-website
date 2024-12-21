import React from 'react';
import "./Header.css";

const Header = ({ query, setQuery, selectedMeal, setSelectedMeal, mealTypes, getData }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        getData();
    };

    return (
        <div className="headerWrapper">
            <h1>Recipe App</h1>
            <div className="searchWrapper">
                <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                        required
                        type="text"
                        placeholder="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <select
                        name="mealTypes"
                        id="mealTypes"
                        value={selectedMeal}
                        onChange={(e) => setSelectedMeal(e.target.value)}
                    >
                        {mealTypes.map((mealType, index) => (
                            <option value={mealType} key={index}>
                                {mealType}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Header;
