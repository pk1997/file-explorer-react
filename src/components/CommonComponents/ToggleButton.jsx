import React, { useState } from 'react'
import './togglebutton.scss'

export default function ToggleButton({ title1, title2, defaultValue, value1, value2, changeType }) {
    const [activeTitle, toggleActiveTitle] = useState(defaultValue);

    const toggle = (type) => {
        changeType(type)
        toggleActiveTitle(type)
    };

    return (
        <div className='toggle-button' >
            <button className={'button-1 ' + (activeTitle !== value1 ? 'toggle-inactive' : '')} onClick={() => toggle(value1)}>{title1}</button>
            <button className={'button-2 ' + (activeTitle !== value2 ? 'toggle-inactive' : '')} onClick={() => toggle(value2)}>{title2}</button>
        </div>
    )
}
