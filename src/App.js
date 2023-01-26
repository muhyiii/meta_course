import { Route, Routes } from "react-router-dom";
import Navbar from "./COMPONENTS/navbar";
import Home from "./PAGES/home";


function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Navbar />
      <div className="h-[90%] px-40">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
