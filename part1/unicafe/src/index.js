import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h2>{props.text}</h2>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>

  )
}


const Statistic = (props) => {
  return (
      <p>{props.text} {props.value}</p>
  )

}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState([])
  const calculateAverage = () => {
    return average.reduce((a, b) => a + b, 0) / average.length;
  }

  const calculatePercentage = (a, b) => {
    let P = a / b;
    return P * 100 + " %";
  }

  if (good === 0) {
    return (
      <div>
        <Header text={"give feedback"} />
        <Button handleClick={() => { setGood(good + 1); setAverage(average.concat(1)) }} text={"good"} />
        <Button handleClick={() => { setNeutral(neutral + 1); setAverage(average.concat(0)) }} text={"neutral"} />
        <Button handleClick={() => { setBad(bad + 1); setAverage(average.concat(-1)) }} text={"bad"} />
        <Header text={"statistics"} />
        <Statistic text={"No feedback given"} />
      </div>
    )
  } else {
    return (
      <div>
        <Header text={"give feedback"} />
        <Button handleClick={() => { setGood(good + 1); setAverage(average.concat(1)) }} text={"good"} />
        <Button handleClick={() => { setNeutral(neutral + 1); setAverage(average.concat(0)) }} text={"neutral"} />
        <Button handleClick={() => { setBad(bad + 1); setAverage(average.concat(-1)) }} text={"bad"} />
        <Header text={"statistics"} />
        <table>
          <tbody>
            <tr>
              <td><Statistic text="good" /></td>
              <td><Statistic value={good} /></td>
            </tr>
            <tr>
              <td><Statistic text="neutral" /></td>
              <td><Statistic value={neutral} /></td>
            </tr>
            <tr>
              <td><Statistic text="bad" /></td>
              <td><Statistic value={bad} /></td>
            </tr>
            <tr>
              <td><Statistic text="all" /></td>
              <td><Statistic value={good + neutral + bad} /></td>
            </tr>
            <tr>
              <td><Statistic text="average" /></td>
              <td><Statistic value={calculateAverage()} /></td>
            </tr>
            <tr>
              <td><Statistic text="positive" /></td>
              <td><Statistic value={calculatePercentage(good, (good + neutral + bad))} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


ReactDOM.render(<App />,
  document.getElementById('root')
)