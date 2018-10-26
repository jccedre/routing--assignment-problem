import React, { Component } from 'react';

import './Course.css';

class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: null,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
      return nextProps.match.params.id !== this.props.match.params.id || nextState.course !== this.state.course;
  }

  componentDidMount() {
    this.loadCourse();
  }

  componentDidUpdate() {
    this.loadCourse();
  }

  loadCourse() {
    if (this.props.match.params.id) {
      if (!this.state.course || (this.state.course && this.state.course.id !== this.props.match.params.id)) {
        const paramsString = this.props.location.search;
        const searchParams = new URLSearchParams(paramsString);

        this.setState({course: {
          id: this.props.match.params.id,
          title: searchParams.get('title'),
        }});
      }
    }
  }
    render () {
      let course = <p>Please select a Post!</p>;
      if (this.state.course) {
        course = <div className="Course">
            <h1>{this.state.course.title}</h1>
            <p>You selected the Course with ID: {this.state.course.id}</p>
        </div>
      }

      return course;
    }
}

export default Course;
