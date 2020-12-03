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
                <h3>Settings</h3>
                <AudienceList audience={this.props.audience}/>
                <AudienceForm />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        audience: state.audience
    }
}


export default connect(mapStateToProps, {fetchAudience})(SettingsContainer);