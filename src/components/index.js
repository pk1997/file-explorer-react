import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Fileview from './FileView'
import { connect } from 'react-redux'
import { updateCurrentFileSystem } from '../actions/file.actions'
import { filterFileSystemAccordingToPath } from '../utils/fileHelpers'

class index extends Component {

    componentDidMount() {
        const { updateCurrentFileSystem, fileSystem } = this.props
        updateCurrentFileSystem(filterFileSystemAccordingToPath(window.location.pathname, fileSystem), fileSystem)
    }

    render() {
        return (
            <div>
                <section className="grid">
                    <Sidebar />
                    <Fileview />
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fileSystem: state.files.fileSystem ? state.files.fileSystem : null
    }
}

const mapDispatchToProps = dispatch => ({
    updateCurrentFileSystem: (filteredFileSystem, fileSystem) => dispatch(updateCurrentFileSystem(filteredFileSystem, fileSystem))
})

export default connect(mapStateToProps, mapDispatchToProps)(index);
