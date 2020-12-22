import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Statistic = ({text, value}) => {
 return ( <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr> )
}

const Statistics = ({good,neutral,bad}) => {
  let num = good - bad
  let den =good + neutral + bad
  let average = num/den;
  let percentage =(good*100/den) + ' %' 

  if(den===0) {return (<div><p>No feedback given</p></div>) }

else { return (  
    <div>
      
    <table>
      <tbody>
  <Statistic text="good" value={good}/>
  <Statistic text="neutral" value={neutral}/>
  <Statistic text="bad" value={bad}/>
  <Statistic text="all" value={den}/>
  <Statistic text="average" value={average}/>
  <Statistic text="percentage" value={percentage}/>
  </tbody>
  </table>
  </div>) }
} 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood=()=> {
    setGood(good + 1)
  }

  const handleNeutral= () => {
    setNeutral(neutral +1)
  }

  const handleBad = () => setBad(bad + 1)



  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick = {handleNeutral}>neutral</button>
      <button onClick = {handleBad}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)