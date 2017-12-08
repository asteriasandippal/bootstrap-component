import React, { Component } from 'react';
import Page from './examples/Page';
import ComponentData from './helpers/ComponentData';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Page data={ComponentData} />
            </div>
        );
    }
}

export default App;
