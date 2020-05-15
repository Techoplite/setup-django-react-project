import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    state = {
        testModels: []
    }

    async componentDidMount() {
        const response = await fetch("http://127.0.0.1:8000/api/testmodels/");
        const data = await response.json();
        this.setState({ testModels: data });
    }

    render() {
        return (
            <div>
                <h1>Django and React are working together now!</h1>
                {this.state.testModels.map(testModel => (
                    <p key={testModel.id}>
                        {testModel.test_attribute}
                    </p>
                ))
                }
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))