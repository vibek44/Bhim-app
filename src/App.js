import React, {Component} from 'react';
import {Cardlist} from './component/card-list/card-list';


class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(promise=>promise.json())
    .then(users=>this.setState({monsters:users}))
  }
  render(){
    return (
       <div className="App">
          <Cardlist monsters={this.state.monsters} />
      </div>
        )
  }
  
}

export default App;
