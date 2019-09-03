import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ToDoActions from './actions';
import { List } from './components';
import './index.css'

const App = props => {
  const { toDos, actions } = props;
  return (
    <div>
      <h1> my to do list </h1>
      <List toDos={toDos} actions={actions} {...props} />
    </div>
  );
};

const mapStateToProps = state => ({
  toDos: state.toDos,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ToDoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
