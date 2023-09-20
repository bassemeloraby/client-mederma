import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
    <Header/>
      <div className="container"> <Routes>
      <Route path="/" element={<Home />} /></Routes></div>
    </Fragment>
  );
}

export default App;
