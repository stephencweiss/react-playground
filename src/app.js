import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as ToDoActions from './actions'
import {List} from './components'


const App = (props) => {
  const {toDos, actions} = props;
  return (
    <div>
      <h1> my to do list </h1>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    toDos: state.toDos,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ToDoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);