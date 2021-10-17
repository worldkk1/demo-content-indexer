import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/search" component={Search} />
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
