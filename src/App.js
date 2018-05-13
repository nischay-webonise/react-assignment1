import React, { Component } from 'react';
import FilterBox from './FilterBox';
import StudentList from './StudentList';
import results from './results.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      filter_params: {
        name: ''
      }
    }
    this.set_parameters = this.set_parameters.bind(this);
  }

  render() {
    return (
      <div>
        <FilterBox set_parameter_callback={ this.set_parameters }  />
        <StudentList results={results} filter_parameters={this.state.filter_params}/>
      </div>
    );
  }

  set_parameters(value_from_child){
    this.setState({
      filter_params: {
        name: value_from_child['name'],
        fail: value_from_child['fail'],
        distinction: value_from_child['distinction'],
        first_class: value_from_child['first_class'],
        second_class: value_from_child['second_class']
      }
    })

  }
}

export default App;
