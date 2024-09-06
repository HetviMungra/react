import React, { useState } from 'react'

export default function Event_ty() {
    const [count, setCounter] = useState(0);
    const [name, setName] = useState("");
    
    const [color, setColor] = useState('');
    // Event handler to change the color
    const handleChange = (event) => {
        setColor(event.target.value);
    };
    const [isVisible, setIsVisible] = useState(false)

    const Submit = (event) => {
        event.preventDefault()
        document.write("Form submitted...")
    }

    return (
        <div>

            <center>
                <u><i> <h5>Event  </h5>  </i></u>
                <h1> Onclick</h1>
                <button onClick={() => setCounter(count + 1)}> OnClick : {count}</button>
                {
                    isVisible ? <h2>ON</h2> : <h2> OFF</h2>
                }
                <button onClick={() => setIsVisible(!isVisible)}>
                    click
                </button>
                <br /><hr />

                <h1> Onchange </h1>
                <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
                <p>{name}</p>

                <h1 style={{ color }}>Pick a Color</h1>
                <input type="color" value={color} onChange={handleChange} />
                <p>Selected Color: {color}</p>
                <hr />
                <h1>Onsubmit</h1>

                <form action="" onSubmit={(event) => Submit(event)}>
                    <button type='submit'> Submit</button>
                </form>

            </center>

        </div>
    )
}
