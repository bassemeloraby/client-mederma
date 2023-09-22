import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner";
// import Table from "react-bootstrap/Table";
import { mainUrl } from "../../data";
const url = mainUrl + "indications";

function Indication() {
    const { ScientificName } = useParams();
    // eslint-disable-next-line
    const [allDrugs, setAllDrugs] = useState([]);
    const [loading, setLoading] = useState(false);

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

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
    Indication
    {ScientificName}
    </div>
  )
}

export default Indication
