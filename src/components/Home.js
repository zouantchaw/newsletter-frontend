import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h3>This app lets your create, review, and send a newsletter in a matter of minutes.</h3>

                <p>
                    To get started, head over to he <a href='/settings'>settings</a> page to choose a theme and to add your recipients.
                    After that, head over to the <a href='/newsletters'>newsletters</a> page send your first newsletter. 
                </p>
            </div>
        );
    }
}

export default Home;