import React, { Component } from 'react';

class AudienceList extends Component {

    renderAudience = () => {
        return this.props.audience.map(fan => <li>{fan.email}</li>)
    }

    render() {
        return (
            <div>
                <h4>Email List: {this.props.audience.length} members</h4>
                <ul>
                    {this.renderAudience()}    
                </ul> 
            </div>
        );
    }
}

export default AudienceList;