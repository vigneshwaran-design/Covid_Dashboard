// import logo from './logo.svg';
import './app.css';
import Top from "./componets/navbar.js";
import Search from "./componets/page2.js";
import Home from "./componets/page1";
import Global from "./componets/page3.js";
import Display from "./componets/display.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    < div className="app">
      <Router>
        <Top fixed="top" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/global" element={<Global />} />
          <Route exact path="/display" element={<Display />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
