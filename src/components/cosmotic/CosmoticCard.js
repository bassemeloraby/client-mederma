import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import GoogleLink from "../GoogleLink";
import Spinner from "../Spinner";

const CosmoticCard = ({ cosmotics }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const search = () => {
    setLoading(true);
    navigate(`/cosmotics/cosmoticSearch`);
    setLoading(false);
  };
  const filter = () => {
    setLoading(true);
    navigate(`/cosmotics/cosmoticFilter`);
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div>CosmoticCard</div>
      <div className="buttons mb-2 p-2" style={{ backgroundColor: "brown" }}>
        <Button variant="primary" onClick={search}>
          Cosmotic Search
        </Button>{" "}
        <Button variant="primary" onClick={filter}>
          Cosmotic Filter
        </Button>{" "}
      </div>

      {cosmotics
        .filter((c) => c._id === id)
        .map((c, i) => (
          <Card key={i} style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>{c.Description}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Company: {c.Company}</ListGroup.Item>
              <ListGroup.Item>
                Use: {c.use1}
                {c.use2 && "and"}
                {c.use2}
              </ListGroup.Item>
              <ListGroup.Item>
                Used Area: {c.usedArea1},{c.usedArea2}
              </ListGroup.Item>
              <ListGroup.Item>
                <GoogleLink name={c.Description} />
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
    </Fragment>
  );
};

export default CosmoticCard;
