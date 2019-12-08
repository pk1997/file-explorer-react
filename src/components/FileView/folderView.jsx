import React from 'react';
import { changePath } from '../../utils/fileHelpers'
import Icon from './icon'
import AddFile from './addFileForm';


export default function FolderView({ children, updateFileSystem, fileSystem }) {
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
        <div>
            {files && (<div className='main-folder-display'>
                {files}
                <center>
                    <AddFile />
                </center>
            </div>)}

        </div>
    )
}
