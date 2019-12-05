import React, { createRef, Component } from 'react'
import { FOLDER_ICON_LINK, FILE_ICON_LINK, FILETYPES } from '../../utils/constants'
import FileOptionsMenu from './fileOptionsMenu'
import { deleteFolder } from '../../utils/fileHelpers'
import { filterFileSystemAccordingToPath } from '../../utils/fileHelpers'
import { connect } from 'react-redux'
import FileInfo from './fileInfo'
import { updateFileSystem, updateCurrentFileSystem } from '../../actions/file.actions'
class icon extends Component {
    nodeRef = createRef();

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            showInfo: false,
            style: {
                right: 0,
                left: 0
            }
        };
    }

    componentDidMount() {
        document.addEventListener('contextmenu', this._handleContextMenu);
        document.addEventListener('click', this._handleMouseLeave);
    }

    componentWillUnmount() {
        document.removeEventListener('contextmenu', this._handleContextMenu);
        document.removeEventListener('click', this._handleMouseLeave);
    }

    _handleContextMenu = event => {
        event.preventDefault();

        const path = event.composedPath();

        const wasOutside = !path.includes(this.nodeRef.current) || false;
        if (wasOutside) {
            this.setState({
                visible: false,
                style: {
                    right: 0,
                    left: 0
                },
                previousValue: {
                    right: 0,
                    left: 0
                }
            });
            return;
        }

        const clickX = event.clientX;
        const clickY = event.clientY;
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const rootW = this.nodeRef.current.offsetWidth;
        const rootH = this.nodeRef.current.offsetHeight;

        const right = screenW - clickX > rootW;
        const left = !right;
        const top = screenH - clickY > rootH;
        const bottom = !top;

        const style = {
            left: 0,
            top: 0
        };

        if (right) {
            style.left = `${clickX + 5}px`;
        }

        if (left) {
            style.left = `${clickX - rootW - 5}px`;
        }

        if (top) {
            style.top = `${clickY + 5}px`;
        }

        if (bottom) {
            style.top = `${clickY - rootH - 5}px`;
        }

        const prevStyle = {
            top: style.top,
            left: style.left
        };

        this.setState({
            style,
            visible: true,
            prevStyle
        });
    };

    _handleMouseLeave = event => {
        const { visible } = this.state;
        const wasOutside = !(event.target.contains === this.nodeRef.current);

        if (wasOutside && visible)
            this.setState({
                visible: false,
                style: {
                    right: 0,
                    left: 0
                }
            });
    };

    updateShowInfo = (state) => {
        this.setState({
            showInfo: state
        })
    }

    delete = (child, fileSystem) => {
        let newFileSystem = deleteFolder(child, fileSystem)
        this.props.updateFileSystem(newFileSystem)
        this.props.updateCurrentFileSystem(filterFileSystemAccordingToPath(window.location.pathname, newFileSystem), newFileSystem)
    }

    render() {
        const { child, updateCurrentFileSystem, fileSystem } = this.props
        const { style, visible, showInfo } = this.state
        return (
            <div ref={this.nodeRef}>
                <div className='flex-column cursor-pointer file-icon'>
                    <span className='margin'>
                        <img alt="FOLDER" src={child.type === FILETYPES.folder ? FOLDER_ICON_LINK : FILE_ICON_LINK}
                            width="69.2" height="55.9" />
                    </span>
                    <center>{child.name}</center>
                </div>
                {visible && (
                    <FileOptionsMenu
                        fileSystem={fileSystem}
                        updateCurrentFileSystem={updateCurrentFileSystem}
                        child={child}
                        style={style}
                        updateShowInfo={this.updateShowInfo}
                        deleteFolder={this.delete}
                    />
                )
                }

                {showInfo && (
                    <FileInfo
                        child={child}
                        updateShowInfo={this.updateShowInfo}
                        style={this.state.prevStyle}
                    />
                )}
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
    updateFileSystem: (fileSystem) => dispatch(updateFileSystem(fileSystem)),
    updateCurrentFileSystem: (filteredFileSystem, fileSystem) => dispatch(updateCurrentFileSystem(filteredFileSystem, fileSystem))
})


export default connect(mapStateToProps, mapDispatchToProps)(icon);