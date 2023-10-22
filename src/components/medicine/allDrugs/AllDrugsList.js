import React from "react";
import { Virtuoso } from "react-virtuoso";
import { useNavigate } from "react-router-dom";
import GoogleLink from "../../GoogleLink";

function AllDrugsList({ items, setScientific }) {
  const navigate = useNavigate();

  const handelS = (s) => {
    setScientific(s);
    navigate(`/allD/scientificName`);
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
            className=""
          >
            <div>
              <h3>
                {drug.TradeName} {drug.Strength} {drug.StrengthUnit}
              </h3>
              <h6>{drug.ScientificName} </h6>
              <h6>{drug.PublicPrice} SR </h6>
            </div>
          {/* -----------------options ----------------*/}
            <div className="d-flex bg-light rounded-2">
              <span
              className="ms-2"
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => handelS(drug.ScientificName)}
              >
                Alternative
              </span>
              <span
              className="me-2 ms-2"
                style={{ cursor: "pointer", color: "green" }}
                onClick={() => handleIndication(drug.ScientificName)}
              >
                Indication
              </span>{" "}
              <GoogleLink
                name={drug.TradeName + drug.Strength + drug.StrengthUnit}
              />
            </div>
          </div>
        )}
      />{" "}
    </div>
  );
}

export default AllDrugsList;
