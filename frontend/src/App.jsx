import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Insert from "./pages/Insert";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/insert" element={<Insert />} />
      </Routes>
    </Router>
  );
}

export default App;
