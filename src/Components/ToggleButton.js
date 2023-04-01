import React, {useState} from 'react'




const ToggleButton=()=>{
    const [isOn, setIsOn] = useState(false);

    const toggle=()=> setIsOn(!isOn);

    return(
        <button onClick={toggle}>{isOn? "ON" :"OFF" } </button>
    )
}

export default ToggleButton;


