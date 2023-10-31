import React, { Fragment, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import GoogleLink from "../GoogleLink";
import Spinner from "../Spinner";
import { CompanyDb } from "../../data/CosmoticData";

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
  const SF = () => {
    setLoading(true);
    navigate(`/cosmotics/cosmoticSF`);
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
        <Button variant="primary" onClick={SF}>
         SF
        </Button>{" "}
      </div>

      {cosmotics
        .filter((c) => c._id === id)
        .map((c, i) => (
          <section key={i} className="d-flex">
            <div className="11 col-6 border-end">
              <div className="mb-2">
                <Card.Title>{c.Description}</Card.Title>
              </div>
              
              {c.picLink && (
                <div className="div-img mb-2">
                  <img src={c.picLink} alt="insurance2" className="img1"></img>
                </div>
              )}
              <div className="mb-2">
                {CompanyDb.filter((x) => x.name === c.Company).map((x, i) => (
                  <Link
                    to={`${x.ourPro}${c.companyCategory1}/${c.compProType}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                    className="ms-2"
                  >
                    product site
                  </Link>
                ))}{" "}
              </div>
            </div>
            <div className="12 col-6 ">
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-lowercase text-danger">
                  {c.Company + " " + c.companyCategory1 + " " + c.compProType}
                </ListGroup.Item>
                
                <ListGroup.Item>Company: {c.Company}</ListGroup.Item>
                <ListGroup.Item>Product Type: {c.compProType}</ListGroup.Item>
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
                  {!c.skinSenstivety && ""}
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
                  {c.aknePoreSkin && " and "}
                  {c.aknePoreSkin}
                  {c.hyperpigmentedSkin && " and "}
                  {c.hyperpigmentedSkin}
                  {c.flushedSkin && " and "}
                  {c.flushedSkin}
                  {c.irritatedSkin && " and "}
                  {c.irritatedSkin}
                  {c.damagedSkin && " and "}
                  {c.damagedSkin}
                </ListGroup.Item>
                {c.price && (
                  <ListGroup.Item>price: {c.price} SR</ListGroup.Item>
                )}
                <ListGroup.Item> {c.soapFree}</ListGroup.Item>
                <ListGroup.Item> {c.paraffinFree}</ListGroup.Item>
                <ListGroup.Item> {c.fregranceFree}</ListGroup.Item>
                <ListGroup.Item> <h5>How to use?</h5>{c.dose}</ListGroup.Item>

                <ListGroup.Item>
                  <GoogleLink name={c.Description} />
                </ListGroup.Item>
              </ListGroup>
              {user && (
                <div>
                  <Button
                    variant="success"
                    onClick={() => editHandler(c)}
                    className="mb-2"
                  >
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
