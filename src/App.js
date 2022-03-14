import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";


export default class App extends Component {
  page = 15;
  countryName = 'in';
  api = process.env.REACT_APP_NEWS_API;

  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News apiKey={this.api} key='general' pageSize={this.page} country={this.countryName} category='General'/>}></Route>
          <Route exact path="/business" element={<News apiKey={this.api} key='business' pageSize={this.page} country={this.countryName} category='Business'/>}></Route>
          <Route exact path="/entertainment" element={<News apiKey={this.api} key='entertainment' pageSize={this.page} country={this.countryName} category='Entertainment'/>}></Route>
          <Route exact path="/health" element={<News apiKey={this.api} key='health' pageSize={this.page} country={this.countryName} category='Health'/>}></Route>
          <Route exact path="/science" element={<News apiKey={this.api} key='science' pageSize={this.page} country={this.countryName} category='Science'/>}></Route>
          <Route exact path="/sports" element={<News apiKey={this.api} key='sports' pageSize={this.page} country={this.countryName} category='Sports'/>}></Route>
          <Route exact path="/technology" element={<News apiKey={this.api} key='technology' pageSize={this.page} country={this.countryName} category='Technology'/>}></Route>
          <Route exact path="/general" element={<News apiKey={this.api} key='general' pageSize={this.page} country={this.countryName} category='General'/>}></Route>
        </Routes>
    </Router>

    )
  }
}
