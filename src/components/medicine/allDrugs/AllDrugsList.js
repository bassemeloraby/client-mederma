import React from "react";
import { Virtuoso } from "react-virtuoso";
import { GrSearchAdvanced } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function AllDrugsList({ items }) {
  const navigate = useNavigate();

const handelS =(s)=>{
  // navigate(`/ScientificName/${drug.ScientificDescriptionCodeRoot}`)
  navigate(`/ScientificName/${s}`)
}

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
            <h3>{drug.TradeName}  {drug.Strength} {drug.StrengthUnit}</h3>
            <h6>
              {drug.ScientificName}{" "}
              <span style={{ cursor: "pointer",color:"blue" }}  onClick={() =>handelS(drug.ScientificName)}>alternative</span>
              <GrSearchAdvanced />
            </h6>
            <h6>{drug.PublicPrice} SR</h6>
          </div>
        )}
      />{" "}
    </div>
  );
}

export default AllDrugsList;