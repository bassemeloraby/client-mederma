import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AllD from "./pages/medicine/AllD";
import ScientificName from "./pages/medicine/ScientificName";

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
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
