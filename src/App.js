import Main from "./pages/Main";
import Navbar1 from "./components/NavigationBars/Navbar1";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/navbar1" element={<Navbar1 />}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
