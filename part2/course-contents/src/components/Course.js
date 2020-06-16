import React from 'react'

const Header = (props) => {
    return (
      <div>
        <h2>
          {props.course.name}
        </h2>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        {props.course}
      </div>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        <Part course={props.course.parts.map(part => <div key={part.id}>{part.name} {part.exercises}</div>)} />
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <div>
        <b>total of {props.course.parts.reduce((sum, parts) => sum + parts.exercises, 0)} exercises</b>
      </div>
    )
  }
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }

  export default Course