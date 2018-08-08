import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";

class App extends Component {
  state = {
    todos: [
      { id: 1, text: "one", checked: true },
      { id: 2, text: "two", checked: true },
      { id: 3, text: "three", checked: true }
    ]
  };
  onChangeState = e => {
    const todo = this.state.todos.filter(todo => {
      return todo.id.toString() === e.target.id;
    })[0];
    todo.checked = e.target.checked;
    this.setState({ todos: this.state.todos });
  };

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {this.state.todos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onChange={this.onChangeState}
              />
            );
          })}
        </div>
      </div>
    );
  };
}

export default App;
