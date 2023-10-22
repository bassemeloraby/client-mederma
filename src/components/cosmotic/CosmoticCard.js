import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Spinner from "../Spinner";
import { l1, l2 } from "../../data/UrlData";

const CosmoticCard = ({ updatedPoduct }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const search = () => {
    setLoading(true);
    navigate(`/cosmotics/cosmoticSearch`);
    // window.location.reload();
    setLoading(false);
  };
  const filter = () => {
    setLoading(true);
    navigate(`/cosmotics/cosmoticFilter`);
    window.location.reload();
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

      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>{updatedPoduct.Description}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Company: {updatedPoduct.Company}</ListGroup.Item>
          <ListGroup.Item>
            Use: {updatedPoduct.use1}
            {updatedPoduct.use2 && "and"}
            {updatedPoduct.use2}
          </ListGroup.Item>
          <ListGroup.Item>
            Used Area: {updatedPoduct.usedArea1},{updatedPoduct.usedArea2}
          </ListGroup.Item>
          <ListGroup.Item>
            <Link
              to={l1 + updatedPoduct.Description + l2}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "red" }}
            >
              Google Pic
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Fragment>
  );
};

export default CosmoticCard;
