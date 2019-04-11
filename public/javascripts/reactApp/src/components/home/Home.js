import React from 'react';
import './Home.css';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.count = 53;
    console.log('constructor')
  }

  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve('test');
      }, 2000)
    })
  }

  async getMyData() {
    console.log(await this.getData())
    console.log('111')   
  }

  handleClick(e) {
    this.getMyData()
  }

  render() {
    return (
      <div>
        <div className="one" style={{ cursor: 'pointer' }} onClick={() => {this.handleClick()}}>my count:</div>
        <div className="two">
          {this.count}
        </div>
        <code>
          gulp hot server finished ~!
        </code>
      </div>
    )
  }
}

export default Home;