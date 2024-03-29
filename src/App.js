import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Insurance from "./pages/insurance/Insurance";
import AllDrugs from "./pages/medicine/AllDrugs";
import Cosmotics from "./pages/cosmotic/Cosmotics";
import Indication from "./pages/medicine/Indication";
import IdleTimerContainer from "./components/IdleTimerContainer";
import { useSelector } from "react-redux";
import NotFind from "./pages/NotFind";
import MedCalc from "./pages/medicine/MedCalc";
import MainNav from "./components/MainNav";
import CosmoticGrid from "./pages/cosmotic/CosmoticGrid";
import Companies from "./pages/cosmotic/Companies";
import AdminNav from "./components/AdminNav";
import CosmoticAdmin from "./pages/cosmotic/CosmoticAdmin";
import Course from "./pages/Course";

function App() {
  const { user } = useSelector((state) => state.auth);
  window.onbeforeunload = function () {
    localStorage.removeItem("user");
  };

  return (
    <Fragment>
      <Header />
      <div className="">
      <MainNav/>
      {user&&<AdminNav/>}
      
      {user && <IdleTimerContainer></IdleTimerContainer>}
        <Routes>
          <Route path="/*" element={<NotFind />} />
          <Route path="/" element={<Home />} />
          <Route path="/allD/*" element={<AllDrugs />} />
          <Route path="medCalc" element={<MedCalc />} />

          <Route path="/indication/:ScientificName" element={<Indication />} />
          <Route path="/cosmotics/*" element={<Cosmotics />} />
          <Route path="/cosmoticGrid" element={<CosmoticGrid />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login />} />
          {/*admin */}
          <Route path="/cosmoticAdmin" element={<CosmoticAdmin/>} />

        </Routes>
        <div style={{ width: "50px", textAlign: "center", margin: "auto" }}>
          <ToastContainer className="justify-content-md-center" />
        </div>
      </div>
     
    </Fragment>
  );
}

export default App;
