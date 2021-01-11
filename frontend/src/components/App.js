import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component {

class App extends Component {
    render() {
        return <h1>React App</h1>
    }
}

// renders the class App content to the template with container has id 'app'
ReactDOM.render(<App />, document.getElementById('app'))
