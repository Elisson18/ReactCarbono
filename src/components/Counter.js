import React, { useEffect, useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const increment = 20; 
    const digitCount = 9; 

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => prev + increment);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const digits = counter.toString().padStart(digitCount, '0').split('');

    return (
        <div className="counter-container">
            {digits.map((digit, index) => (
                <div className="digit" key={index}>
                    <span className="active">{digit}</span>
                </div>
            ))}
            <h1 className="text2">DE CARBONO EM GRAMAS</h1>
        </div>
    );
};

export default Counter;
