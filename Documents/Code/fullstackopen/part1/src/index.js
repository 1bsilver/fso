import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <div>
      {props.contents.name} {props.contents.exercise}
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        <Part contents={props.content[0]} />
        <Part contents={props.content[1]} />
        <Part contents={props.content[2]} />
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.prop[0].exercise +
          props.prop[1].exercise +
          props.prop[2].exercise}
      </p>
    </div>
  );
};

const App = () => {
  const exercises = [
    {
      name: "Fundamentals of React",
      exercise: 10,
    },
    {
      name: "Using props to pass data",
      exercise: 7,
    },
    {
      name: "State of a component",
      exercise: 14,
    },
  ];
  console.log("Hello from component!");

  return (
    <div>
      <Header course="Half Stack application development" />
      <Content content={exercises} />
      <Total prop={exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
