import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap/';


import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import Navigation from './components/Navbar';


import './App.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navigation />

          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/skills" render={() => <SkillsPage />} />


        </Container>
      </Router>
    );
  }
}


export default App;
