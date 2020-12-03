import React, { Component } from 'react';

class AudienceForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }
    
    handleChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addAudience(this.state)
        this.setState({
            email: ''
        })
    }
    
    render() {
        return (
            <div>
                <h4>Add Members</h4>
                <p>{this.state.email}</p>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>
                        Email:
                        <input type="text" onChange={event => this.handleChange(event)} value={this.state.email}/>
                    </label>
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default AudienceForm;