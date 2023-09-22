import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";

import { mainUrl } from "../../data";
import AllDrugsList from "../../components/medicine/allDrugs/AllDrugsList";
import AllDugsSearch from "../../components/medicine/allDrugs/AllDugsSearch";
const url = mainUrl + "allDrugs";

function AllD() {
  const [allDrugs, setAllDrugs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState();

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
      <AllDugsSearch setQuery={setQuery} />
      <AllDrugsList items={items} />
    </div>
  );
}

export default AllD;
