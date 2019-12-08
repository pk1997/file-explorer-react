import React, { Component } from 'react'
import { ADD_FILE_ICON_LINK } from '../../utils/constants'
import AddFilePopup from './addFilePopup'

export default class addFileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            style: {
                right: '50',
                left: '40'
            }
        }
    }

    showPopup = (showPopup) => {
        this.setState({
            showPopup
        })
    }

    render() {
        const { showPopup, style } = this.state
        return (
            <div>
                <span onClick={() => this.showPopup(true)}>
                    <img alt="FOLDER" src={ADD_FILE_ICON_LINK}
                        width="96" height="113" />
                </span>
                {showPopup &&
                    <AddFilePopup
                        showPopup={this.showPopup}
                        style={style}
                    />
                }
            </div>
        )
    }
}
