import React from "react";
import { Virtuoso } from "react-virtuoso";
import { Link, useNavigate } from "react-router-dom";

const l1 = "https://www.google.com/search?q=";
const l2 =
  "&sca_esv=571711580&rlz=1C1VDKB_enSA1075SA1075&tbm=isch&sxsrf=AM9HkKkhm2K1JYgiDZSvrn-lnYR52Xi5vA:1696763801819&source=lnms&sa=X&ved=2ahUKEwj18LLdqeaBAxXD2wIHHfNMAzMQ_AUoAXoECAQQAw&biw=1366&bih=641&dpr=1";
function AllDrugsList({ items }) {
  const navigate = useNavigate();

  const handelS = (s) => {
    navigate(`/ScientificName/${s}`);
  };
  const handleIndication = (i) => {
    navigate(`/indication/${i}`);
  };

  return (
    <div>
      <Virtuoso
        style={{ height: "600px", background: "#f8f8f8" }}
        data={items}
        totalCount={10500}
        itemContent={(index, drug) => (
          <div
            style={{
              background: index % 2 === 0 ? "#ffbb00" : "#ffcc99",
              color: "#333",
              padding: "10px",
              fontSize: "16px",
              fontFamily: "Arial, sans-serif",
              border: "1px solid #ccc",
              borderRadius: "5px",
              margin: "5px 0",
            }}
          >
            <h3>
              {drug.TradeName} {drug.Strength} {drug.StrengthUnit}
            </h3>
            <h6>
              {drug.ScientificName}{" "}
              <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => handelS(drug.ScientificName)}
              >
                Alternative
              </span>
            </h6>
            <h6>
              {drug.PublicPrice} SR{" "}
              <span
                style={{ cursor: "pointer", color: "green" }}
                onClick={() => handleIndication(drug.ScientificName)}
              >
                Indication
              </span>{" "}
              
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
            </h6>
          </div>
        )}
      />{" "}
    </div>
  );
}

export default AllDrugsList;
