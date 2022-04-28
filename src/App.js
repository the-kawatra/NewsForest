import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const page = 15;
  const countryName = 'in';
  const api = process.env.REACT_APP_NEWS_API;

    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News apiKey={api} key='general' pageSize={page} country={countryName} category='General'/>}></Route>
          <Route exact path="/business" element={<News apiKey={api} key='business' pageSize={page} country={countryName} category='Business'/>}></Route>
          <Route exact path="/entertainment" element={<News apiKey={api} key='entertainment' pageSize={page} country={countryName} category='Entertainment'/>}></Route>
          <Route exact path="/health" element={<News apiKey={api} key='health' pageSize={page} country={countryName} category='Health'/>}></Route>
          <Route exact path="/science" element={<News apiKey={api} key='science' pageSize={page} country={countryName} category='Science'/>}></Route>
          <Route exact path="/sports" element={<News apiKey={api} key='sports' pageSize={page} country={countryName} category='Sports'/>}></Route>
          <Route exact path="/technology" element={<News apiKey={api} key='technology' pageSize={page} country={countryName} category='Technology'/>}></Route>
        </Routes>
    </Router>

    )
}

export default App;