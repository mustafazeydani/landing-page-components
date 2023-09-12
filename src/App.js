import Main from "./pages/Main";
import Navbar1 from "./components/NavigationBars/Navbar1/Navbar1";
import Navbar2 from "./components/NavigationBars/Navbar2/Navbar2";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/navbar1" element={<Navbar1 />}/>
          <Route path="/navbar2" element={<Navbar2 />}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
