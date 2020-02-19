import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './components/NavBar';
// import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
  render() {
    return (
        <Router>
        <div className="App">
        <NavBar />
          <div id="page-body">
          <Route path ="/" component={HomePage} exact />
          <Route path ="/about" component={AboutPage} exact />
          <Route path ="/articles-list" component={ArticleList} exact />
          <Route path ="/article" component={ArticlePage} exact />
          </div>
        </div>
        </Router>

    );
  }
}

export default App;
