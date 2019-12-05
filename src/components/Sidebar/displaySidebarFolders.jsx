import React from 'react'
import { FILETYPES, DOWN_ARROW_LINK } from '../../utils/constants'

export default function displaySidebarFolders({ currentFileSystem, children }) {
    let files = null
    if (children) {
        files = Object.keys(children).map(key =>
            children[key].type === FILETYPES.folder &&
            <div className='sidebar-file-display' value={key}>
                <div>
                    {children[key].name}
                </div>
                <span>
                    <img alt="arrow_down" src={DOWN_ARROW_LINK}
                        width="24" height="24" />
                </span>
            </div>

        )
    }
    return (
        children && <div className='height-100'>
            <div className='root sidebar-file-display'>ROOT</div>
            {files}
        </div>
    )
}
