import React from 'react';
import logo from './logo.svg';
import './App.css';


class AddTask extends React.Component{
  render(){

    const getLabel = () => this.props.onButtonClick(this.props.value);
    
    const inp = <input value={this.props.value} onChange={this.props.onChange} onClick={this.props.onClick}></input>
    const btn = <button onClick={getLabel}>Add Task!</button>
    return <div>{inp} - {btn}</div>
  }
}
class TodoItem extends React.Component {

  render () {
    const {done, label} = this.props.item;

    const toggle = () => this.props.onToggle(this.props.index);

    return <div onClick={toggle}>{done ? 'X' : 'O'} {label}</div>
  }
}

class FootBar extends React.Component {
  
  render () {
    let total  = 0
    this.props.arrs.forEach(element => {
      if (element.done ==false) {
        total+=1
      } 
    });
    return <div>Tasks left: {total}</div>
  }
}


class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      items: [{
        label: 'Create a TODO list',
        done: false,
      },
      ]
    }
  }

  render() {
    const toggleItem = (ind) => {
      const items = this.state.items;
      items[ind].done = !items[ind].done;
      
      this.setState({
        items: items,
        inputBar : 'Enter the Task'
      })
    }

    const items = this.state.items.map((item, index) => {
      // return <div key={index}>{index} - {item.label}</div>
      return <TodoItem key={index} item={item} index={index} onToggle={toggleItem}></TodoItem>
    })

    const foot = <FootBar arrs={this.state.items}></FootBar>;
    
    const updateInput = (event) => {
      this.setState({
        inputBar: event.target.value
      })
    }
    const eraseText = () =>{
      this.setState({
        inputBar : ''
      })
    }
    const newTask = (item_label) =>{
      const items = this.state.items;
      items.push({
        label:item_label,
        done: false
      });
      this.setState({
        items,
        inputBar : 'Enter the Task'
      })
    }
    

    return <div>
      <AddTask value={this.state.inputBar} onChange={updateInput} onClick={eraseText} onButtonClick={newTask}></AddTask>
      <br></br>
      <div>{items}</div>
      <br></br>
      <div>{foot}</div>
    </div>

  }
}

export default App;

