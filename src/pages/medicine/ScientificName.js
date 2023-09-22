import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner";
import Table from "react-bootstrap/Table";
import { mainUrl } from "../../data";
const url = mainUrl + "allDrugs";

function ScientificName() {
  const { ScientificName } = useParams();

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
      ScientificName : 
      <h2>{ScientificName}</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Trade Name</th>
            <th>Pharmaceutical Form</th>
            <th>Scientific Name</th>
            <th>Public Price</th>
          </tr>
        </thead>
        <tbody>
          {allDrugs
            .filter((drug) => drug.ScientificName === ScientificName)
            .map((drug, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{drug.TradeName} {drug.Strength} {drug.StrengthUnit}</td>
                <td> {drug.PharmaceuticalForm}</td>
                <td> {drug.ScientificName}</td>
                <td> {drug.PublicPrice} SR</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ScientificName;
