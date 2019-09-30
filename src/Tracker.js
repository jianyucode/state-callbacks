import React, {Component} from 'react';

class Tracker extends Component {

  state = { score: 0};

  singleKill = () => {
    this.setState({score: this.state.score + 1})
  }

  tripleKill = () => {this.setState( st => {return {score: st.score + 3}})}

  render() {
    return (
      <div>
      <h1>{this.state.score}</h1><br />
      <button onClick={this.singleKill}>Single Kill</button>
      <button onClick={this.tripleKill}>Triple Kill</button>

      </div>
    )
  }
}

export default Tracker;
