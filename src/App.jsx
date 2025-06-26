import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroLayout from "./HeroLayout";
import ParkSerpongLayout from "./ParkSerpongLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroLayout />} />
        <Route path="/park-serpong" element={<ParkSerpongLayout />} />
      </Routes>
    </>
  );
}

export default App;
