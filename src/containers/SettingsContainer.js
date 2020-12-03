import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudienceList from '../components/AudienceList';
import AudienceForm from '../components/AudienceForm';
import { fetchAudience } from '../actions/rootActions'

class SettingsContainer extends Component {

    componentDidMount(){
        this.props.fetchAudience()
    }

    render() {
        return (
            <div>
                <AudienceList />
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


export default connect(mapStateToProps, {fetchAudience})(SettingsContainer);