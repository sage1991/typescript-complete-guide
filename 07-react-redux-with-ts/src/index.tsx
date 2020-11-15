import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";



interface AppProps {
  color: string;
}

interface AppState {
  counter: number;
}


class App extends Component<AppProps, AppState> {
  state: AppState = { counter: 0 };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>increment</button>
        <button onClick={this.onDecrement}>decrement</button>
        <p>{ this.state.counter }</p>
        { this.props.color }
      </div>
    );
  }

  onIncrement = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter + 1
      }
    })
  }

  onDecrement = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter - 1
      }
    })
  }
}


// const App = (props: AppProps): JSX.Element => {
//   return (
//     <div>{ props.color }</div>
//   );
// }


// const store = createStore(reducer, applyMiddleware(thunk));


// ReactDOM.render(
//   <Provider store={store} >
//     <App color="red" />
//   </Provider>, 
//   document.getElementById("root")
// );