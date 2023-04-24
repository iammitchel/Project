import React from "react";
import './App.css'
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from "./component/ScrollToTop";
import Programs from "./component/Programs";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/programs" Component={Programs} />
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
