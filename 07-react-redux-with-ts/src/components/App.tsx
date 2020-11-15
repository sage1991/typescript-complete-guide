import React, { Component } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Todo, fetchTodos, deleteTodo, TodoAction, CounterAction } from "../actions"
import { addCounter } from "../actions/counter";
import { StoreState } from "../reducers";


interface AppProps {
  todos: Todo[];
  counter: number;
  fetchTodos: () => void;
  deleteTodo: (id: number) => void;
  addCounter: (num: number) => void;
}


interface AppState {
  loading: boolean;
}


class App extends Component<AppProps, AppState> {
  state: AppState = { loading: false };

  componentDidUpdate(prevProps: AppProps) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div>
        <div>{ this.props.counter }</div>
        <button onClick={this.onAdd.bind(this, 1)}>add 1</button>
        <button onClick={this.onAdd.bind(this, -1)}>add -1</button>
        <button onClick={this.onFetch}>fetch</button>
        { this.state.loading ? "LOADING..." : this.renderList() }
      </div>
    );
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => (
      <div key={todo.id} onClick={this.onDelete.bind(this, todo.id)}>{ todo.title }</div>
    ));
  }

  onFetch = () => {
    this.props.fetchTodos();
    this.setState({ loading: true });
  }
  onDelete = (id: number) => this.props.deleteTodo(id)
  onAdd = (num: number) => this.props.addCounter(num)
}



const mapStateToProps = ({ todos, counter }: StoreState): StoreState => {
  return { todos: todos, counter: counter };
}


const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, any, TodoAction | CounterAction>) => {
  return { 
    fetchTodos: () => dispatch(fetchTodos()),
    deleteTodo: (id: number) => dispatch(deleteTodo(id)),
    addCounter: (num: number) => dispatch(addCounter(num)),
  };
}

const AppWithStore = connect(mapStateToProps, mapDispatchToProps)(App);

export { AppWithStore as App };