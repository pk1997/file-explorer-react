import React from 'react'
import { FILE_ICON_LINK, FOLDER_ICON_LINK, FILETYPES, CLOSE_ICON_LINK } from '../../utils/constants'

export default function fileInfo({ style, child, updateShowInfo }) {
    return (
        <div className='file-info file-options' style={style}>
            <div className='title'>File Info
                <div className='cursor-pointer' onClick={() => {
                    updateShowInfo(false)
                }}>
                    <img alt="FOLDER" src={CLOSE_ICON_LINK}
                        width="24" height="24" />
                </div>
            </div>

            <span className='icon'>
                <center>
                    <img alt="FOLDER" src={child.type === FILETYPES.folder ? FOLDER_ICON_LINK : FILE_ICON_LINK}
                        width="51" height="72" />
                </center>
            </span>
            <div className='flex'>
                <p className='label'>Name : </p>
                <p>{child.name}</p>
            </div>
            <div className='flex'>
                <p className='label'>Size : </p>
                <p>{child.size}</p>
            </div>
            <div className='flex'>
                <p className='label'>Creator name : </p>
                <p>{child.createdBy}</p>
            </div>
            <div className='flex'>
                <p className='label'>Created date : </p>
                <p>{child.createdOn}</p>
            </div>
        </div>
    )
}
