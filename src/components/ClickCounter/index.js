import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="heading-edit">
          The button has been clicked
          <span>0</span> times
        </h1>
        <p className="para-edit">Click the button to increase the count!</p>
        <button className="button-edit">Click Me!</button>
      </div>
    )
  }
}

export default ClickCounter
