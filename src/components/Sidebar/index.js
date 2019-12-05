import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { connect } from 'react-redux'
import DisplaySidebarFolders from './displaySidebarFolders'
import { getChildren, filterFileSystemAccordingToPath } from '../../utils/fileHelpers'
class index extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const { currentFileSystem, fileSystem } = this.props;
        return (
            <div className='sidebar'>
                <DisplaySidebarFolders
                    children={getChildren(filterFileSystemAccordingToPath('/', fileSystem).children, fileSystem)}
                    currentFileSystem={currentFileSystem}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(index);
