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
            <div></div>
        );
    }
}
