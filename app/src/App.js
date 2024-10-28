import React, { useState } from 'react';

function App() {
    // Timing function
    const Time = new Date().getHours();
    let Greetings;
    if (Time < 12) {
        Greetings = "Good Morning!";
    } else if (Time < 18) {
        Greetings = "Good Afternoon!";
    } else {
        Greetings = "Good Evening!";
    }

    const [state, setState] = useState({ Username: '' });
    const [display, setDisplay] = useState('');
    const [visible, setVisible] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        setDisplay(state.Username);
        setVisible(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    };

    return (
        <div className="h-screen flex justify-center items-center">
            {visible && (
                <form onSubmit={handleSubmit} className="bg-gray-500 p-6 rounded shadow-md">
                    <div className='flex flex-col justify-center items-center'>
                        <label className="mb-2">Name:</label>
                        <input 
                            className='border border-lime-500 my-3 p-2 rounded' 
                            type='text' 
                            name='Username' 
                            value={state.Username} 
                            onChange={handleChange} 
                        />
                        <button 
                            type='submit' 
                            className='bg-blue-700 text-white p-2 rounded hover:bg-blue-900'
                        >
                            Click me
                        </button>
                    </div>
                </form>
            )}
            {!visible && (
                <div className="bg-gray-500 p-6 rounded shadow-md text-center">
                    <h1>Hello, {Greetings} <strong>{display}</strong> Have a Nice Day</h1>
                </div>
            )}
        </div>
    );
}

export default App;
