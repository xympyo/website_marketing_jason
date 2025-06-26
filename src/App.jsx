import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroLayout from "./HeroLayout";
import ParkSerpongLayout from "./ParkSerpongLayout";
import TheHiveLayout from "./TheHiveLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroLayout />} />
        <Route path="/park-serpong" element={<ParkSerpongLayout />} />
        <Route path="/the-hive" element={<TheHiveLayout />} />
      </Routes>
    </>
  );
}

export default App;
