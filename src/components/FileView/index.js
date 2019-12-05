import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PathView from './pathView'
import FolderView from './folderView'
import './styles.scss'
import { updateCurrentFileSystem } from '../../actions/file.actions'

class index extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const { children, fileSystem, updateCurrentFileSystem, currentFileSystem } = this.props
        return (
            currentFileSystem &&
            <div className='fileview'>
                <PathView
                    fileSystem={fileSystem}
                    currentPath={window.location.pathname}
                    parentPath={fileSystem[currentFileSystem.parent].path}
                    updateFileSystem={updateCurrentFileSystem}
                />
                <FolderView
                    fileSystem={fileSystem}
                    children={children}
                    updateFileSystem={updateCurrentFileSystem}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fileSystem: state.files.fileSystem ? state.files.fileSystem : null,
        currentFileSystem: state.files.currentFileSystem ? state.files.currentFileSystem : null,
        children: state.files.children ? state.files.children : null
    }
}

const mapDispatchToProps = dispatch => ({
    updateCurrentFileSystem: (filteredFileSystem, fileSystem) => dispatch(updateCurrentFileSystem(filteredFileSystem, fileSystem))
})


export default connect(mapStateToProps, mapDispatchToProps)(index);