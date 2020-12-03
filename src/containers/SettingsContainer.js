import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudienceList from '../components/AudienceList';
import AudienceForm from '../components/AudienceForm';
import SocialLinks from '../components/SocialLinks';
// import SocialForm from '../components/SocialForm';

import { fetchAudience, addAudience, fetchSocials } from '../actions/rootActions'

class SettingsContainer extends Component {

    componentDidMount(){
        this.props.fetchAudience()
        this.props.fetchSocials()
    }

    render() {
        return (
            <div>
                <h3>Settings</h3>
                <AudienceList audience={this.props.audience}/>
                <AudienceForm addAudience={this.props.addAudience}/>
                <SocialLinks social={this.props.social}/>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        audience: state.audience,
        social: state.socials[0]
    }
}


export default connect(mapStateToProps, {fetchAudience, addAudience, fetchSocials})(SettingsContainer);