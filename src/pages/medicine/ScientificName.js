import React, { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner";
import Table from "react-bootstrap/Table";
import { mainUrl } from "../../data";
const url = mainUrl + "allDrugs";
const l1 = "https://www.google.com/search?q=";
const l2 =
  "&sca_esv=571711580&rlz=1C1VDKB_enSA1075SA1075&tbm=isch&sxsrf=AM9HkKkhm2K1JYgiDZSvrn-lnYR52Xi5vA:1696763801819&source=lnms&sa=X&ved=2ahUKEwj18LLdqeaBAxXD2wIHHfNMAzMQ_AUoAXoECAQQAw&biw=1366&bih=641&dpr=1";

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
            <th>Public Price</th>
          </tr>
        </thead>
        <tbody>
          {allDrugs
            .filter((drug) => drug.ScientificName === ScientificName)
            .map((drug, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{drug.TradeName} {drug.Strength} {drug.StrengthUnit} &nbsp;
                <Link
                to={
                  l1 + drug.TradeName + drug.Strength + drug.StrengthUnit + l2
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "red" }}
              >
                Google Pic
              </Link>
                </td>
                <td> {drug.PharmaceuticalForm}</td>
                <td> {drug.PublicPrice} SR</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ScientificName;
