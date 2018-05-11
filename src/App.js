import React, { Component } from 'react';
import FilterBox from './FilterBox';
import StudentList from './StudentList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log('kya hua hai isko')
    return (
      <div>
        <FilterBox name='asad'/>
        Hello
      </div>
    );
  }
}

export default App;
