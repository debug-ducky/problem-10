import React from 'react';
import { bindActionCreators } from 'redux';
import { incrementCounterAction, decerementCounterAction } from './store/counter';
import { connect } from 'react-redux';

function App(props) {
  const {counter, increment, decrement} = props;
  return (
    <div className="App">
      <button onClick={() => { increment() }}>+</button>
      <p>{counter}</p>
      <button onClick={() => { decrement() }}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  // what?????
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

    // what????
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
