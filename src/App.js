import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Fileview from './components/FileView'
import Base from './components/index'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="*" component={Base} />
      </Router>
    </Provider>
  );
}

export default App;
