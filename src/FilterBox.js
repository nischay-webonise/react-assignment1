import React from 'react';

class FilterBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: {
        name: '',
        fail: '',
        distinction: '',
        first_class: '',
        second_class: ''
      },
    }
    this.set_parent_parameters = this.set_parent_parameters.bind(this);
  }

  set_parent_parameters(){
    this.props.set_parameter_callback(this.state.value)
  }

  onChange(event) {
    debugger
    this.setState({
      value: {
        [event.currentTarget.name]: event.currentTarget.checked
      }
    })
  }

  render(){
    return(
      <div>
        <label>
          search:
          <input key={Math.random(1000)} type="text" name="name" value={this.state.value['name']} onChange={(event) => { this.onChange(event)} } />
          <input key={Math.random(1000)} type="checkbox" name="distinction" checked={this.state.value['distinction']} onChange={(event) => { this.onChange(event)} } />
          <input key={Math.random(1000)} type="checkbox" name="fail" checked={this.state.value['fail']} onChange={(event) => { this.onChange(event)} } />
          <input key={Math.random(1000)} type="checkbox" name="first_class" checked={this.state.value['first_class']} onChange={(event) => { this.onChange(event)} } />
          <input key={Math.random(1000)} type="checkbox" name="second_class" checked={this.state.value['second_class']} onChange={(event) => { this.onChange(event)} } />
        </label>
        <button onClick={ this.set_parent_parameters }> Search </button>
      </div>
    );
  }
}

export default FilterBox;