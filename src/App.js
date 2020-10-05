import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Wrapper from './components/Wrapper';
import Data from './components/Data';
import './styles/style.css'



class App extends Component {

  state = {
    employees: [],
  };

  componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=20&nat=Aus`)
        .then(res => {
          this.setState({ employees: res.data.results });
        });
  }


  render() {
    return (
      <div className="App">
        <Wrapper />
        {this.state.employees.length > 0 &&
        <Data employees={this.state.employees}/>
  }
      </div>
    );
  }
}

export default App;
