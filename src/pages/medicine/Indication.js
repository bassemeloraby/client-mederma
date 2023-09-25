import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner";
import Table from "react-bootstrap/Table";
// import { mainUrl } from "../../data";
// const url = mainUrl + "indications";

function Indication() {
  const { ScientificName } = useParams();
  // eslint-disable-next-line
  const [allDrugs, setAllDrugs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAllDrugs = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/indications");
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
    const afilter = allDrugs.filter(
      (drug) => drug.SCIENTIFIC_NAME === ScientificName
    );
    setItems(afilter);
    console.log(afilter)
  }, [allDrugs, ScientificName]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      Indication
      {ScientificName}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>INDICATION</th>
            <th>ICD_10_CODE</th>
          </tr>
        </thead>
        <tbody>
          {items.map((drug, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{drug.INDICATION}</td>
              <td> {drug.ICD_10_CODE}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Indication;
