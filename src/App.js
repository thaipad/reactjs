import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";

import TaskList from './tasks/TaskList';
import Header from './layouts/Header';
import About from './pages/About';
import AddTask from './tasks/AddTask';

import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faList, faSort, faTrash, faCheck, faCheckSquare, faSquare,
  faCalendarPlus, faInfo, faSortAmountDown, faSortAmountUp,
  faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faList, faSort, faTrash, faCalendarPlus, faInfo, faCheckSquare,
  faSortDown, faSortUp, faSortAmountDown, faSortAmountUp, faCheck, faSquare);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>
            <div className="App">
                <Header branding="TASKs"/>
                <div className="container">
                  <Switch>
                    <Route exact path="/" component={TaskList}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/task/add" component={AddTask}/>
                    <Route exact path="/task/add/:id" component={AddTask}/>
                  </Switch>
                </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
