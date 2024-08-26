import React from 'react';
import './input.css'; // Import CSS file for styling

const Input = ({ id, name, placeholder, value, onChange,size }) => {
    return (
        <div className="text-input-wrapper">
            <div className='text-input-title'>{name}</div>
            <input
                style={{ marginTop: "5px",  width:`${size}px`}}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="text-input"
            />
        </div>
    );
}

export default Input;