import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner";
import Table from "react-bootstrap/Table";
import { mainUrl } from "../../data";
const url = mainUrl + "indications";

function Indication() {
  const { ScientificName } = useParams();
  const [indications, setIndications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [ind, setInd] = useState([]);

  useEffect(() => {
    const fetchIndications = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${url}`);
        setLoading(false);
        setIndications(res.data);
        console.log(res.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchIndications();
    
  }, []);

  useEffect(() => {
   const filter1 = indications.filter(
      (drug) => drug.SCIENTIFIC_NAME === ScientificName
    )
    setItems(filter1)
    console.log(filter1)

  }, [indications,ScientificName]);

  useEffect(() => {
    const unique = items.map((drug) => drug.INDICATION);
     console.log(unique)
     setInd(unique)
   }, [items]);
  
   useEffect(() => {
    const un1 = ind.filter((item,i,ar)=> ar.indexOf(item) === i)
    console.log(un1)
   }, [ind]);


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
            <th>PHARMACEUTICAL FORM</th>
          </tr>
        </thead>
        <tbody>
          {items.map((drug, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{drug.INDICATION}</td>
              <td> {drug.ICD_10_CODE}</td>
              <td> {drug.PHARMACEUTICAL_FORM}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Indication;
