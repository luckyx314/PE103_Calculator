import React, {useState} from 'react'
import "./SelectOperation.css"

import CalcBMI from '../CalcBMI/CalcBMI'
import SearchAnswer from '../SearchAnswer/SearchAnswer'
import CalcThr from '../CalcThr/CalcThr'
import CalcWhr from '../CalcWhr/CalcWhr'

const SelectOperation = () => {
    const [operation, setOperation] = useState('searchAnswer')
    return (
        <div className="selectOperationContainer">
            <select
                className="selectOperation"
                onChange={(e) => setOperation(e.target.value)}
            >
                <option value="searchAnswer">Search Answer</option>
                <option value="calcBMI">Calculate BMI</option>
                <option value="calcWHR">Calculate WHR</option>
                <option value="calcTHR">Calculate THR</option>
            </select>
            <div>
                {operation === "searchAnswer" && <SearchAnswer />}
                {operation === "calcBMI" && <CalcBMI />}
                {operation === "calcTHR" && <CalcThr/>}
                {operation === "calcWHR" && <CalcWhr/>}
            </div>
        </div>
    )
}

export default SelectOperation
