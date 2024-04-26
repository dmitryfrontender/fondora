import React from "react";
import './ToggleBtn.scss'
import { useState } from "react";


const ToggleBtn = () => {

    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className={`ToggleButton ${isToggled ? 'bg-active' : ''}`} onClick={handleChange}>
            <div className={`ball ${isToggled ? 'ball-active' : ''}`}></div>
        </div>
    )
}


export default ToggleBtn