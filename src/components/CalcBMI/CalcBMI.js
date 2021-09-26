import React, {useState} from 'react'
import "./CalcBMI.css"

const CalcBMI = () => {
    const [kg, setKg] = useState(0);
    const [height, setHeight] = useState(0);
    const [heightUnit, setHeightUnit] = useState('m');
    const [result, setResult] = useState(0);

    const handleResult = () => {
        switch (heightUnit) {
            case "m":
                const m2 = Math.pow(height, 2);
                return setResult(kg/m2);
            case 'cm':
                const toMeter = height / 100;
                const cm_to_m2 = Math.pow(toMeter, 2);
                return setResult(kg/cm_to_m2);
            case 'in':
                const inToMeter = height / 39.37;
                const in_to_m2 = Math.pow(inToMeter, 2);
                return setResult(kg/in_to_m2);
            default:
                return

        }
    }

    return (
        <div className="calcBMi-container">
            <input 
                type="number" 
                placeholder="kilograms"
                min="0"
                onChange={(e) => setKg(e.target.value)} 
            />
            <div className="heightClassification">
                <input 
                    type="number" 
                    placeholder="height"
                    min="0"
                    onChange={(e) => setHeight(e.target.value)}
                />
                <select
                    onChange={(e) => setHeightUnit(e.target.value)}
                >
                    <option value="m">m</option>
                    <option value="cm">cm</option>
                    <option value="in">in</option>
                </select>
            </div>
            <button 
                className="calcBMI-btn"
                onClick={() => handleResult()}
            >Calculate</button>

            <div className="displayResult">
                {(result < 18.5 && result > 1) && <p>{`BMI: ${Math.round((result + Number.EPSILON) * 100) / 100} Classification: Underweight`}</p>}
                {(result >= 18.5 && result <= 22.9) && <p>{`BMI: ${Math.round((result + Number.EPSILON) * 100) / 100} Classification: Normal`}</p>}
                {(result >= 23.0 && result <= 24.9) && <p>{`BMI: ${Math.round((result + Number.EPSILON) * 100) / 100} Classification: At-risk of obesity`}</p>}
                {(result >= 25.0 && result <= 29.9) && <p>{`BMI: ${Math.round((result + Number.EPSILON) * 100) / 100} Classification: Obese I`}</p>}
                {result >= 30.0 && <p>{`BMI: ${Math.round((result + Number.EPSILON) * 100) / 100} Classification: Obese II`}</p>}
                {(result <= 1 && result !== 0) && <p>{`Please check your work again. Result: ${result}`}</p>}
                {result === 0 && <p>{`Enter your data above`}</p>}
            </div>
        </div>
    )
}

export default CalcBMI
