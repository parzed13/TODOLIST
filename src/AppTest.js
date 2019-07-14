import React from 'react';
import logo from './logo.svg';
import './App.css';

class MyDiv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bold: props.bold
    }
  }

  render() {
    const toggle = () => {
      this.setState({
        bold: !this.state.bold
      })

      this.props.onButtonClick(this.props.children)
    }
    const btn = <button onClick={toggle}>Click Me!</button>

    const content = this.state.bold ?
      <strong>{this.props.children}</strong> :
      this.props.children

    return <div>{content} - {btn}</div>
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      myInput: 'asd'
    }
  }


  render() {
    const updateInput = (event) => {
      console.log(event.target.value);
      this.setState({
        myInput: event.target.value
      })
    }

    const updateText = (text) => {
      this.setState({
        myInput: text
      })
    }

   return <div>
      <input value={this.state.myInput} onChange={updateInput}></input>
      <MyDiv bold={true} onButtonClick={updateText}>Hello</MyDiv>
      <MyDiv bold={false} onButtonClick={updateText}>{this.state.myInput}</MyDiv>
    </div>
  }
}

export default App;
