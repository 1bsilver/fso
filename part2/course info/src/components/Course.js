import React from "react";

const Header = ({header}) => {
  return(
  <h1>
    {header}
    </h1>)
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = ({content}) => {

  const total = content.reduce((sum, content) => sum += content.exercises,0)
  



  return (
    <div>
      {content.map(content => 
      <Part key={content.id} part={content} />)}
   
    
      <h3>total of {total} exercises</h3>
    </div>
  )
}

const Course = ({course}) => {
  return(<div>
    <Header header={course.name}/>
    <Content content={course.parts} />
  </div>)
}

export default Course
