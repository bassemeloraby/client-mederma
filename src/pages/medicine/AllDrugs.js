import React, {  useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { mainUrl } from "../../data";
import axios from "axios";

import Spinner from "../../components/Spinner";
import AllDrugsList from "../../components/medicine/AllDrugsList";
import AllDugsSearch from "../../components/medicine/AllDugsSearch";
import ScientificName from "../../components/medicine/ScientificName";
const url = mainUrl + "allDrugs";

const AllDrugs = () => {
  const [allDrugs, setAllDrugs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState();
  const [scientific, setScientific] = useState();

  useEffect(() => {
    const fetchAllDrugs = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${url}`);
        setLoading(false);
        setAllDrugs(res.data);
        console.log(res.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchAllDrugs();
  }, []);

  useEffect(() => {
    if (!query) setItems(allDrugs);
    setItems((_) =>
      allDrugs.filter(
        (x) =>
          x.ScientificName.toLowerCase().includes(query?.toLowerCase()) ||
          x.TradeName.toLowerCase().includes(query?.toLowerCase())
      )
    );
  }, [query, allDrugs]);

  useEffect(() => {
    setItems(allDrugs);
  }, [allDrugs]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="d-flex mb-2">
        <h2>All Drugs</h2>
      </div>
      <Routes>
        <Route
          path="allDugsSearch"
          element={
            <div className="container">
              {" "}
              <AllDugsSearch setQuery={setQuery} />
              <AllDrugsList items={items} setScientific={setScientific}/>
            </div>
          }
        />
        <Route path="scientificName" element={<ScientificName allDrugs={allDrugs} scientific={scientific}  />} />
      </Routes>
    </div>
  );
};

export default AllDrugs;
