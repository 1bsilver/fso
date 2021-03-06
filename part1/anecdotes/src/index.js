import React, { useState } from "react";
import ReactDOM from "react-dom";

const Votes = ({votes}) => {
  return (
    <div>
      <p>has {votes} votes</p>
    </div>
  )
}

const Button = ({ action, text }) => {
  return (
    <>
      <button onClick={action}>{text}</button>
    </>
  );
};

const MostVoted = ({votes, anecdotes}) => {
  let x = Math.max(...votes)
  let largest = votes.indexOf(x)
  console.log(largest, "is largest");

  return(<div>
    <h1>Andecdote with the most votes</h1>
    {
      x > 0 ? (<div><p>{anecdotes[largest]}</p>
              <p>has {votes[largest]} votes</p></div>)
      : <p> No anecdote has been voted yet! </p>
    }
  </div>)

}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0,0,0,0,0,0])


  const dice = () => {
    let random = Math.floor(Math.random() * 6);
    console.log(random, "is random");
    setSelected(random);
  };


  const voteUp = (which) => () => {
    let selected = which
    console.log(selected)
    const newVote = [...votes]
    newVote[selected] = newVote[selected] + 1
    setVotes(newVote);
  }

  return (
    <div>
      <h1>Andecdote of the day</h1>
      {props.anecdotes[selected]}
      <Votes votes={votes[selected]} />
      <Button action={voteUp(selected)} text="vote" />
      <Button action={dice} text="next anecdote" />
      <MostVoted anecdotes= {props.anecdotes} votes={votes} />

    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
