import React from 'react'
import { BACK_ICON_LINK } from '../../utils/constants'
import { changePath } from '../../utils/fileHelpers'

export default function pathView({ currentPath, parentPath, fileSystem, updateFileSystem }) {
    return (
        <div className='grid-folder' onClick={() => changePath(parentPath, updateFileSystem, fileSystem)}>
            <span className='cursor-pointer'>
                <img alt="back" src={BACK_ICON_LINK}
                    width="28.3" height="28.3" />
            </span>
            <div className='path'>root{currentPath}</div>
        </div>
    )
}
