import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudienceList from '../components/AudienceList';
import AudienceForm from '../components/AudienceForm';

class SettingsContainer extends Component {

    componentDidMount(){
        // when the container mounts, I want to communicate with the api ang e
        
    }

    render() {
        return (
            <div>
                <AudienceList audience={this.props.audience}/>
                <AudienceForm />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        audience: 'Test',
        social_links: 'Test Test'
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addFan: () => dispatch({ type: "ADD_FAN"}),
        addSocials: () => dispatch({ type: "ADD_SOCIALS"})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);