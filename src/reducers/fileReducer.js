import { ADD_FILE, DELETE_FILE, UPDATE_CURRENT_FILE_SYSTEM, UPDATE_CHILDREN, UPDATE_FILE_SYSTEM } from '../actions/types'
import { fileSystem } from '../utils/dummyFileStructure'

const initialState = {
    fileSystem: fileSystem,
    currentFileSystem: null,
    children: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_CURRENT_FILE_SYSTEM:
            return {
                ...state,
                currentFileSystem: action.payload
            }
        case UPDATE_CHILDREN:
            return {
                ...state,
                children: action.payload
            }
        case UPDATE_FILE_SYSTEM:
            return {
                ...state,
                fileSystem: action.payload
            }
        default:
            return initialState;
    }

}