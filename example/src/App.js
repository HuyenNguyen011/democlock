import React, { Component } from 'react'

import { ExampleComponent } from 'demolock'
import 'demolock/dist/index.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
  //lifecycle method
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className='time-open'>
        <ExampleComponent text='Demo Clock 😄' />
        Thời gian mở web: {this.state.date.toLocaleTimeString()}
        <i> vào</i> <b>{this.state.date.toLocaleDateString()}</b>
      </div>
    )
  }
}

export default App
