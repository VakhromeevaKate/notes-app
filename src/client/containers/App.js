// @flow

import React from 'react';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    render() {
        return (
            <div>
                <h2>Notes App</h2>
            </div>
        );
    }
}
