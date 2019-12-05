import React, { createRef } from 'react'
import { ADD_FILE_ICON_LINK } from '../../utils/constants'
import { changePath } from '../../utils/fileHelpers'
import Icon from './icon'


export default function folderView({ children, updateFileSystem, fileSystem }) {
    let files = null
    if (children) {
        files = Object.keys(children).map(key =>
            <div className='folder-display' value={key} onDoubleClick={() =>
                changePath(children[key].path, updateFileSystem, fileSystem)}>
                <Icon
                    changePath={changePath}
                    child={children[key]}
                />
            </div>
        )
    }
    return (
        files && <div className='main-folder-display'>
            {files}
            <center><span>
                <img alt="FOLDER" src={ADD_FILE_ICON_LINK}
                    width="96" height="113" />
            </span></center>
        </div>
    )
}
