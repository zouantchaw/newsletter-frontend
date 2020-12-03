import React, { Component } from 'react';
import { connect } from 'react-redux';


class SettingsContainer extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    debugger
    return {
        audience: state.emails,
        social_links: state.socials
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);