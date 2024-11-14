import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Smoothies from "./components/smoothies/Smoothies"; // Example component for smoothies
import Sandwiches from "./components/sandwiches/Sandwiches"; // Example component for sandwiches
import HealthyPLate from "./components/healthy-plates/HealthyPlates"; // Example component for healthy pots
import Salads from "./components/salads/Salads"; // Example component for salads
import Sweets from "./components/sweets/Sweets"; // Example component for sweets

function App() {
  return (
    <div id="#root">
      <Router basename={"/green-menu/"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smoothies" element={<Smoothies />} />
          <Route path="/sandwiches" element={<Sandwiches />} />
          <Route path="/healthy-plates" element={<HealthyPLate />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/sweets" element={<Sweets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
