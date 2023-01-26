import { Route, Routes } from "react-router-dom";
import Navbar from "./COMPONENTS/navbar";
import Home from "./PAGES/home";

function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
