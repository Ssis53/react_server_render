import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
    console.log('constructor')
  }

  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  handleClick(e) {
    console.log(e)
  }

  render() {
    return (
      <div>
        <h1 style={{ cursor: 'pointer' }} onClick={this.handleClick}>my count:</h1>
        <h2>
          {this.count}
        </h2>
      </div>
    )
  }
}

export default App;