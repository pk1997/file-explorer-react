import React from 'react'
import { changePath } from '../../utils/fileHelpers'

export default function fileOptionsMenu({ style, fileSystem, updateCurrentFileSystem,
    child, deleteFolder, updateShowInfo }) {
    return (
        <div className='file-options cursor-pointer' style={style}>
            <div className='options'
                onClick={() => changePath(child.path, updateCurrentFileSystem, fileSystem)}>
                Open
            </div>
            <div className='options' onClick={() => {
                updateShowInfo(true)
            }}>Get info</div>
            <div className='delete options' onClick={() => {
                deleteFolder(child, fileSystem)
            }}>Delete</div>
        </div >
    )
}
