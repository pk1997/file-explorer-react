import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CLOSE_ICON_LINK, FILETYPES } from '../../utils/constants'
import ToggleButton from '../CommonComponents/ToggleButton'
import { connect } from 'react-redux'
import { createNewFolder, getKeyByValue, filterFileSystemAccordingToPath, getChildren } from '../../utils/fileHelpers'
import { updateFileSystem, updateCurrentFileSystem } from '../../actions/file.actions'

class addFilePopup extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
        super(props);
        this.state = {
            type: FILETYPES.file,
            missingFields: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeType = (type) => {
        this.setState({
            type
        })
    }

    submitHandler = (e) => {
        let { name, creator, size, date } = this.state
        if (name && creator && size && date) {
            const { fileSystem, currentFileSystem, showPopup, updateFileSystem, updateCurrentFileSystem } = this.props;
            const parent = getKeyByValue(fileSystem, currentFileSystem)
            const newFileSystem = createNewFolder(parent, this.state, fileSystem)
            updateFileSystem(newFileSystem)
            updateCurrentFileSystem(filterFileSystemAccordingToPath(window.location.pathname, newFileSystem), newFileSystem)
            showPopup(false)
        }
        else {
            this.setState({
                missingFields: true
            })
        }
    }

    render() {
        const { style, showPopup } = this.props
        const { missingFields } = this.state
        return (
            <div className='file-info file-options add-file' style={style}>
                <div className='title'>Create New
                <div className='cursor-pointer' onClick={() => showPopup(false)}>
                        <img alt="FOLDER" src={CLOSE_ICON_LINK}
                            width="24" height="24" />
                    </div>
                </div>
                <ToggleButton
                    title1={'File'}
                    title2={'Folder'}
                    defaultValue={FILETYPES.file}
                    value1={FILETYPES.file}
                    value2={FILETYPES.folder}
                    changeType={this.changeType} />
                <input name='name' onChange={this.handleChange} placeholder='Name' />
                <input name='creator' onChange={this.handleChange} placeholder='Creator' required />
                <input name='size' onChange={this.handleChange} placeholder='Size' required />
                <input name='date' type='date' onChange={this.handleChange} placeholder='Date' required />
                {missingFields && (<p className='error'>Please fill all the values</p>)}
                <button onClick={this.submitHandler}>Create</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fileSystem: state.files.fileSystem,
        currentFileSystem: state.files.currentFileSystem
    }
}

const mapDispatchToProps = dispatch => ({
    updateFileSystem: (fileSystem) => dispatch(updateFileSystem(fileSystem)),
    updateCurrentFileSystem: (filteredFileSystem, fileSystem) => dispatch(updateCurrentFileSystem(filteredFileSystem, fileSystem))
})


export default connect(mapStateToProps, mapDispatchToProps)(addFilePopup);