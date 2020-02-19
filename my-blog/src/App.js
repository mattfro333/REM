import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ArticlesListPage from './pages/ArticlesListPage';
// import ArticlePage from './pages/ArticlePage';
// import NavBar from './NavBar';
// import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
  render() {
    return (
    
        <div className="App">
        <HomePage />

          </div>

    );
  }
}

export default App;
