import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { todo, onChange } = this.props;
    return (
      <div>
        <label htmlFor={todo.text}>
          <input
            type="checkbox"
            id={todo.id}
            name={todo.name}
            onChange={onChange}
            checked={todo.checked}
            value={todo.text}
          />
          {todo.text}
        </label>
      </div>
    );
  }
}

export default TodoItem;
