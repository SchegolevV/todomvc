import React, { Component } from 'react';

export default class EditingForm extends Component {

    render() {
        const {text} = this.props

        return (
            <form>
                <input type="text" className="edit" defaultValue={text}/>
            </form>
        );
    }
}
