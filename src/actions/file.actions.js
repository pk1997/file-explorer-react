import {
    ADD_FILE, DELETE_FILE,
    UPDATE_CURRENT_FILE_SYSTEM,
    UPDATE_CHILDREN,
    UPDATE_FILE_SYSTEM
} from './types';
import { getChildren } from '../utils/fileHelpers'

export const addFile = (fileData) => dispatch => {
    dispatch({
        type: ADD_FILE,
        payload: fileData
    })
}

export const deleteFile = (fileData) => dispatch => {
    dispatch({
        type: DELETE_FILE,
        payload: fileData
    })
}

export const updateCurrentFileSystem = (filteredFileSystem, fileSystem) => dispatch => {
    dispatch({
        type: UPDATE_CURRENT_FILE_SYSTEM,
        payload: filteredFileSystem
    })
    dispatch({
        type: UPDATE_CHILDREN,
        payload: filteredFileSystem ? getChildren(filteredFileSystem.children, fileSystem) : null
    })
}

export const updateFileSystem = (newFileSystem) => dispatch => {
    dispatch({
        type: UPDATE_FILE_SYSTEM,
        payload: newFileSystem
    })
}