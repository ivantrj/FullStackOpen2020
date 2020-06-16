import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h2>{props.text}</h2>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>

  )
}

const Votes = (props) => {
  return (
    <p>Has {props.text} votes</p>
  )
}


const points = new Array(6).fill(0)
const pointsCopy = [ ...points ]

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(pointsCopy)
  console.log(Math.max.apply(Math, pointsCopy))
  let largest = Math.max.apply(Math, pointsCopy);
  let mostVotes = (pointsCopy.indexOf(largest));

  
  return (
    <div>
      <Header text="Anecdote of the day"/>
      {props.anecdotes[selected]}
      <Votes text={pointsCopy[selected]} />
      <br></br><Button handleClick={ () => { setVote(pointsCopy[selected] += 1) } } text="vote" />
      <Button handleClick={ () => { setSelected(Math.floor(Math.random() * 6)) }} text="next anecdote" />
      <Header text="Anecdote with most votes"/>
      {props.anecdotes[mostVotes]}
      <Votes text={largest} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)