import React, {useState} from 'react'
import "./CalcThr.css"

const CalcThr = () => {
    const [mhr, setMhr] = useState(0);
    const [rhr, setRhr] = useState(0);
    const [desiredIntensity, setDesiredIntensity] = useState(0);
    const [thr, setThr] = useState(0);
    const [thrZone, setThrZone] = useState('');


    const handleCalculation = () => {
        const mhrMinusRhr = mhr - rhr;
        if (rhr > 80) {
            setDesiredIntensity(.60)
            setThr((mhrMinusRhr * .60) + rhr)

        } else if (rhr >= 60 && rhr <= 80) {
            setDesiredIntensity(.70)
            setThr((mhrMinusRhr * .70) + rhr)

        } else if (rhr < 60) {
            setDesiredIntensity(.80)
            setThr((mhrMinusRhr * .80) + rhr)
        }
        const lowEnd = ((mhrMinusRhr * .60) + rhr);
        const highEnd = ((mhrMinusRhr * .80) + rhr);

        setThrZone(`${lowEnd} to ${highEnd}`);
    }
    return (
        <div className="calcThrContainer">
            <input 
                type="number" 
                placeholder="MHR"
                onChange={(e) => setMhr(Number(e.target.value))}    
            />
            <input 
                type="number" 
                placeholder="RHR"
                onChange={(e) => setRhr(Number(e.target.value))}    
            />
            <div className="displayThrDetails">
                <div>
                    {rhr > 80 && <p><span>{`THR: ${thr}`}</span> <span>{`THR Zone: ${thrZone}`}</span> <span>{`RHR: ${rhr}`}</span> <span>{`Desired Intensity: ${desiredIntensity * 100}%`}</span></p>}
                    {(rhr >= 60 && rhr <= 80) && <p><span>{`THR: ${thr}`}</span> <span>{`THR Zone: ${thrZone}`}</span> <span>{`RHR: ${rhr}`}</span> <span>{`Desired Intensity: ${desiredIntensity * 100}%`}</span></p>}
                    {(rhr < 60 && rhr !== 0) && <p><span>{`THR: ${thr}`}</span> <span>{`THR Zone: ${thrZone}`}</span> <span>{`RHR: ${rhr}`}</span> <span>{`Desired Intensity: ${desiredIntensity * 100}%`}</span></p>}
                    {rhr === 0 && <p>Enter your data above</p>}
                </div>  
                <button
                    onClick={() => handleCalculation()}
                >Calculate</button>
            </div>
        </div>
    )
}

export default CalcThr
