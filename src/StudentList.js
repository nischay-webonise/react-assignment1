import React from 'react';

class StudentList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filter_parameters: this.props.filter_parameters,
      result_list: this.props.results      
    }
    this.filtering_student_list = this.filtering_student_list.bind(this);
    this.filter_condition = this.filter_condition.bind(this);
    this.marks_percent = this.marks_percent.bind(this);
  }

  render(){
    var new_result = this.filtering_student_list(this.props.filter_parameters)
    return(
      <ul>
        {
          new_result.map(function(student){
            return <li key={Math.random(1000)}>{ student.firstName }</li>;
          })
        }
      </ul>
    );
  }


  filtering_student_list(filter_params) {
    var list = this.state.result_list.filter(function(student){
      return this.filter_condition(student, filter_params)
    });
    return list
  }

  filter_condition(student, filter_params){ 
    return (
      (student.firstName === filter_params['name'] || student.lastName === filter_params['name'])
    )
  }

  marks_percent(student){
    debugger
    // student_.marks
  }
}



export default StudentList;