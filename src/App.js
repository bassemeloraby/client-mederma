import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AllD from "./pages/medicine/AllD";
import ScientificName from "./pages/medicine/ScientificName";
import Indication from "./pages/medicine/Indication";
import Insurance from "./pages/insurance/Insurance";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allD" element={<AllD />} />
          <Route path="/scientificName/:ScientificName" element={<ScientificName />} />
          <Route path="/indication/:ScientificName" element={<Indication />} />
          <Route path="/insurance" element={<Insurance />} />
        </Routes>
      </div>
      
    </Fragment>
  );
}

export default App;
