import { Virtuoso } from "react-virtuoso";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import GoogleLink from "../GoogleLink";

const CosmoticList = ({ items, user, setUpdateProduct }) => {
  const navigate = useNavigate();
  const editHandler = (prod) => {
    setUpdateProduct(prod);
    navigate(`/cosmotics/cosmoticUpdate/${prod._id}`);
    console.log(prod._id);
  };
  return (
    <div>
      <Virtuoso
        style={{ height: "600px", background: "#f8f8f8" }}
        data={items}
        totalCount={10500}
        itemContent={(index, prod) => (
          <div
            className="d-flex justify-content-between"
            style={{
              background: index % 2 === 0 ? "#00bfff" : "#ffcc99",
              color: "#333",
              padding: "10px",
              fontSize: "16px",
              fontFamily: "Arial, sans-serif",
              border: "1px solid #ccc",
              borderRadius: "5px",
              margin: "5px 0",
            }}
            key={prod._id}
          >
            <div className="">
              {" "}
              <h3>{prod.Description}</h3>
              <h6>{prod.Company} </h6>
              <h6>
                {prod.use1} {prod.use2 && "and"} {prod.use2} for{" "}
                {prod.usedArea1} {prod.usedArea2 && "and"} {prod.usedArea2}
              </h6>
            </div>
            <div className="d-flex">
              <div className="me-2 row">
                <GoogleLink name={prod.Description} />
                <Button
                  variant="primary"
                  onClick={() =>
                    navigate(`/cosmotics/cosmoticCard/${prod._id}`)
                  }
                >
                  Card
                </Button>{" "}
              </div>

              {user && (
                <div>
                  <Button variant="success" onClick={() => editHandler(prod)}>
                    Edit
                  </Button>{" "}
                </div>
              )}
            </div>
          </div>
        )}
      />{" "}
    </div>
  );
};

export default CosmoticList;
