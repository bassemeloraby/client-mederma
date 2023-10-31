import React from "react";
import GoogleLink from "../GoogleLink";
import { Button, Card, ListGroup } from "react-bootstrap";
import { CompanyDb } from "../../data/CosmoticData";
import { Link, useNavigate } from "react-router-dom";
import noPhoto from "../../images/noPhoto.jpg";

const CosmoticCardSF = ({ prod, user, setUpdateProduct }) => {
  const navigate = useNavigate();
  const editHandler = (prod) => {
    setUpdateProduct(prod);
    navigate(`/cosmotics/cosmoticUpdate/${prod._id}`);
    console.log(prod._id);
  };
  return (
    <div>
      <Card.Title>{prod.Description}</Card.Title>
      <div className="div-img mb-2">
        {prod.picLink ? (
          <img
            src={prod.picLink}
            alt="insurance2"
            className="img1"
            width={100}
          ></img>
        ) : (
          <img
            src={noPhoto}
            alt="insurance2"
            className="img1"
            width={100}
          ></img>
        )}
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="text-lowercase text-danger">
            {prod.Company +
              " " +
              prod.companyCategory1 +
              " " +
              prod.compProType}
          </ListGroup.Item>
          <ListGroup.Item>Company: {prod.Company}</ListGroup.Item>
          <ListGroup.Item>Product Type: {prod.compProType}</ListGroup.Item>
          <ListGroup.Item>Form: {prod.form}</ListGroup.Item>
          <ListGroup.Item>
            Company Category: {prod.companyCategory1}
            {prod.companyCategory2 && " and "}
            {prod.companyCategory2}
          </ListGroup.Item>
          <ListGroup.Item>
            Use: {prod.use1}
            {prod.use2 && " and "}
            {prod.use2}
          </ListGroup.Item>
          <ListGroup.Item>
            Used Area: {prod.usedArea1}
            {prod.usedArea2 && " and "}
            {prod.usedArea2}
          </ListGroup.Item>
          <ListGroup.Item>
            Skin Kind: {prod.skinSenstivety}
            {!prod.skinSenstivety && ""}
            {prod.normalSkin && " and "}
            {prod.normalSkin}
            {prod.drySkin && " and "}
            {prod.drySkin}
            {prod.oilySkin && " and "}
            {prod.oilySkin}
            {prod.combinationSkin && " and "}
            {prod.combinationSkin}
            {prod.atopicSkin && " and "}
            {prod.atopicSkin}
            {prod.aknePoreSkin && " and "}
            {prod.aknePoreSkin}
            {prod.hyperpigmentedSkin && " and "}
            {prod.hyperpigmentedSkin}
            {prod.flushedSkin && " and "}
            {prod.flushedSkin}
            {prod.irritatedSkin && " and "}
            {prod.irritatedSkin}
            {prod.damagedSkin && " and "}
            {prod.damagedSkin}
          </ListGroup.Item>
          {prod.price && (
            <ListGroup.Item>price: {prod.price} SR</ListGroup.Item>
          )}
          {prod.soapFree && <ListGroup.Item> {prod.soapFree}</ListGroup.Item>}
          {prod.paraffinFree && (
            <ListGroup.Item> {prod.paraffinFree}</ListGroup.Item>
          )}
          {prod.fregranceFree && (
            <ListGroup.Item> {prod.fregranceFree}</ListGroup.Item>
          )}
          {prod.dose && (
            <ListGroup.Item>
              {" "}
              <h5>How to use?</h5>
              {prod.dose}
            </ListGroup.Item>
          )}

          <ListGroup.Item>
            <GoogleLink name={prod.Description} />
            {CompanyDb.filter((x) => x.name === prod.Company).map((x, i) => (
              <Link
                to={`${x.ourPro}${prod.companyCategory1}/${prod.compProType}`}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className="ms-2"
              >
                product site
              </Link>
            ))}{" "}
          </ListGroup.Item>
          <ListGroup.Item className="d-flex">
            {" "}
            <Button
              variant="primary"
              onClick={() => navigate(`/cosmotics/cosmoticCard/${prod._id}`)}
              className="me-2"
            >
              Card
            </Button>{" "}
            {user && (
              <div>
                <Button
                  variant="success"
                  onClick={() => editHandler(prod)}
                 
                >
                  Edit
                </Button>{" "}
              </div>
            )}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default CosmoticCardSF;
