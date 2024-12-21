import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", email: "" }); // Set default empty strings

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(formData));
        navigate(-1);  // Go back to the previous page
    };

    return (
        <div className='loginWrapper'>
            <div className='formWrapper'>
                <form onSubmit={handleSubmit}>
                    <div className='inputWrapper'>
                        <label htmlFor='name'>Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className='inputWrapper'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
