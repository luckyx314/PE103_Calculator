import React, {useState} from 'react'
import "./NumberBtns.css"

const NumberBtns = () => {
    const [numberInput, setNumberInput] = useState(0);
    const [result, setResult] = useState(0);

    return (
        <div className="arithmeticContainer">
            <div className="btnsContainer">
                <button 
                    className="numberBtns"
                    >1</button>
                <button 
                    className="numberBtns"
                    >2</button>
                <button 
                    className="numberBtns"
                    >3</button>
                <button 
                    className="numberBtns"
                    >4</button>
                <button 
                    className="numberBtns"
                    >5</button>
                <button 
                    className="numberBtns"
                    >6</button>
                <button 
                    className="numberBtns"
                    >7</button>
                <button 
                    className="numberBtns"
                    >8</button>
                <button 
                    className="numberBtns"
                    >9</button>
                <button 
                    className="numberBtns"
                    >+</button>
                <button 
                    className="numberBtns"
                    >0</button>
                <button 
                    className="numberBtns"
                    >-</button>
                <button 
                    className="numberBtns"
                    >*</button>
                <button 
                    className="numberBtns"
                    >/</button>
                <button 
                    className="numberBtns"
                    >=</button>
            </div>
            <div>
                <h1>{result}</h1>
            </div>
        </div>
    )
}

export default NumberBtns
