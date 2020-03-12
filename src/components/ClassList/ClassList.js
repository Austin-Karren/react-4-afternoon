import React, { Component } from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(results => {
      this.setState({
        students: results.data
      })
    })
    // .catch(console.log('Error getting classlist'));
  }

  render() {
    console.log(this.props);
    const students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} >
        <h3 key={i} > {student.first_name} {student.last_name} </h3>
      </Link>
    ));
    return (
      <div className="box">
        <h1> {this.props.match.params.class} </h1>
        <h2>ClassList:</h2>
        {students}
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
      </div>
    )
  }
}