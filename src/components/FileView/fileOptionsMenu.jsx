import React from 'react'

export default function fileOptionsMenu({ style }) {
    return (
        <div className='file-options' style={style}>
            <div className='options'>Open</div>
            <div className='options'>Get info</div>
            <div className='delete options'>Delete</div>
        </div>
    )
}

