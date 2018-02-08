import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos, toggleTodo, deleteTodo} from '../reducers/todo'

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
  <li>
    <button onClick={() => deleteTodo(id)}>x</button>
    <input type="checkbox" checked={isComplete} onChange={() => toggleTodo(id)}/>
    {name}
  </li>
)

class TodoList extends Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo =>
            <TodoItem
              key={todo.id}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
              {...todo}
            />)
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  (state) => ({todos: state.todo.todos}),
  {fetchTodos, toggleTodo, deleteTodo}
)(TodoList)