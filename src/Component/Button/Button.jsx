import React from "react";
import './Button.css'

const Button = ({handleIncrease, handleDecrease}) => {
     return (
        <div className="btn">
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
     )
}
export default Button;