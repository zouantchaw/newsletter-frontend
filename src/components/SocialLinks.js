import React, { Component } from 'react';

class SocialLinks extends Component {
    render() {
        return (
            <div>
                <p>These links go out with each newsletter, make sure to keep them up to date!</p>
                <ul>
                    <li>Twitter: {this.props.social.twitter}</li>
                    <li>Instagram: {this.props.social.instagram}</li>
                    <li>Youtube: {this.props.social.youtube}</li>
                </ul>
            </div>
        );
    }
}

export default SocialLinks;