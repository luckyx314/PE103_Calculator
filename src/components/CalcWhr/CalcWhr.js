import React, {useState} from 'react'
import "./CalcWhr.css"

const CalcWhr = () => {
    const [whr, setWhr] = useState(0);
    const [sex, setSex] = useState('male');
    const [whrStatus, setWhrStatus] = useState('healthy');

    const handleCheckStatus = () => {
        if (sex === 'male') {
            if (whr <= .90) {
                setWhrStatus('healthy'); 
            } else {
                setWhrStatus('unhealthy');
            }
        } else if (sex === 'female'){
            if (whr <= .85) {
                setWhrStatus('healthy'); 
            } else {
                setWhrStatus('unhealthy');
            }
        }
    }
    return (
        <div className="whrStatusContainer">
            <select
                onChange={(e) => setSex(e.target.value)}
            >
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input 
                type="number" 
                onChange={(e) => setWhr(Number(e.target.value))}
            />
            <div>
                {sex === 'male' && <p><span>{`Gender: ${sex}`}</span> <span>{`WHR status: ${whrStatus}`}</span></p>}
                {sex === 'female' && <p><span>{`Gender: ${sex}`}</span> <span>{`WHR status: ${whrStatus}`}</span></p>}
                <button
                    onClick={(e) => handleCheckStatus()}
                >Check</button>
            </div>
        </div>
    )
}

export default CalcWhr
