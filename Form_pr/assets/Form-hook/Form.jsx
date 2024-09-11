import React, { useState, useEffect, useRef } from 'react'

export default function Form() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        Password: '',
        date: '',
        number: '',
        Hobby: ''

    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const nameInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        setIsSubmitted(true); 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    // submit 
    useEffect(() => {
        if (isSubmitted) {
            alert('Form submitted successfully!');
            setIsSubmitted(false); 
        }
    }, [isSubmitted]);

    return (
        <div>
            <div className="main-box">
                <u><h2>Registration Form</h2></u>
                <form onSubmit={handleSubmit}>
                    <div>
                        <br />

                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            ref={nameInputRef} 
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <br />
                        <label>Email address:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <br />
                        <label>Password:</label>
                        <input
                            type="Password"
                            name="Password"
                            value={formData.Password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <br />
                        <label>Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <br />
                        <label>Phone:</label>

                        <input
                            type="text"
                            name="number"
                            value={formData.number}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <br />
                        <label>Hobby:</label>
                        <input
                            type="text"
                            name="Hobby"
                            value={formData.Hobby}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <br /> <br /> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
