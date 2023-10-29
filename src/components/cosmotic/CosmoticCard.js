import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import GoogleLink from "../GoogleLink";
import Spinner from "../Spinner";

const CosmoticCard = ({ cosmotics, setUpdateProduct, user }) => {
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

  const editHandler = (prod) => {
    setUpdateProduct(prod);
    navigate(`/cosmotics/cosmoticUpdate/${prod._id}`);
    console.log(prod._id);
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
          <section key={i} className="d-flex">
            <div className="11 col-6 border-end">
              <div className="">
                <Card.Title>{c.Description}</Card.Title>
              </div>
              {c.picLink && (
                <img src={c.picLink} alt="insurance2" className=""></img>
              )}
            </div>
            <div className="12 col-6 ">
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Company: {c.Company}</ListGroup.Item>
                <ListGroup.Item>Form: {c.form}</ListGroup.Item>
                <ListGroup.Item>
                  Company Category: {c.companyCategory1}
                  {c.companyCategory2 && " and "}
                  {c.companyCategory2}
                </ListGroup.Item>
                <ListGroup.Item>
                  Use: {c.use1}
                  {c.use2 && " and "}
                  {c.use2}
                </ListGroup.Item>
                <ListGroup.Item>
                  Used Area: {c.usedArea1}
                  {c.usedArea2 && " and "}
                  {c.usedArea2}
                </ListGroup.Item>
                <ListGroup.Item>
                  Skin Kind: {c.skinSenstivety}
                  {!c.skinSenstivety && "None Senstive"}
                  {c.normalSkin && " and "}
                  {c.normalSkin}
                  {c.drySkin && " and "}
                  {c.drySkin}
                  {c.oilySkin && " and "}
                  {c.oilySkin}
                  {c.combinationSkin && " and "}
                  {c.combinationSkin}
                  {c.atopicSkin && " and "}
                  {c.atopicSkin}
                </ListGroup.Item>
                <ListGroup.Item>Price: {c.price} SR</ListGroup.Item>

                <ListGroup.Item>
                  <GoogleLink name={c.Description} />
                </ListGroup.Item>
              </ListGroup>
              {user && (
                <div>
                  <Button variant="success" onClick={() => editHandler(c)}>
                    Edit
                  </Button>{" "}
                </div>
              )}
            </div>
          </section>
        ))}
    </Fragment>
  );
};

export default CosmoticCard;
