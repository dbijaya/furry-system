import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';

class App extends Component {
    render() {
        return (
            <Header/>
        )
    }
}   

// renders the class App content to the template with container has id 'app'
ReactDOM.render(<App />, document.getElementById('app'));
