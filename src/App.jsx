import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroLayout from "./HeroLayout";
import ParkSerpongLayout from "./ParkSerpongLayout";
import TheHiveLayout from "./TheHiveLayout";
import BelmontLayout from "./BelmontLayout";
import BentleyLayout from "./BentleyLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroLayout />} />
        <Route path="/park-serpong" element={<ParkSerpongLayout />} />
        <Route path="/the-hive" element={<TheHiveLayout />} />
        <Route path="/belmont-homes" element={<BelmontLayout />} />
        <Route path="/bentley-homes" element={<BentleyLayout />} />
      </Routes>
    </>
  );
}

export default App;
