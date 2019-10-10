import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ToDoActions from './actions';
import { List, NavBar } from './components';
import { useAuth0 } from './Auth/Auth0Context';

const App = props => {
  const { toDos, actions } = props;
  const { loading } = useAuth0;

  return loading ? (
    <div>{'Loading...'}</div>
  ) : (
    <div>
      <header>
        <NavBar />
      </header>
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
