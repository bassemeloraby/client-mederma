import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDb, CompanyDb, usedAreaDb } from "../../data/CosmoticData";
import axios from "axios";
import Spinner from "../Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleLink from "../GoogleLink";
import { mainUrl } from "../../data";
const url = mainUrl + "products";

// const url = "/api/products";
// -------------------------------CosmoticUpdate components---------------------------------//
const CosmoticUpdate = ({
  setUpdatedPoduct,
  user,
  cosmotics,
  updateProduct,
}) => {
  // main constants
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Company: updateProduct.Company,
    Category: updateProduct.Category,
    usedArea1: updateProduct.usedArea1,
    usedArea2: updateProduct.usedArea2,
  });

  const { Company, Category, usedArea1, usedArea2 } = formData;
  // -----------functions-------------//
  const cancelHandler = () => {
    navigate(`/cosmotics/cosmoticSearch`);
    console.log();
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.patch(`${url}/${id}`, {
        Company: Company,
        Category: Category,
        usedArea1: usedArea1,
        usedArea2: usedArea2,
      });

      setLoading(false);
      setUpdatedPoduct(res.data);
      console.log(res.data);
      const uu = cosmotics.find((comp) => comp._id === id);
      if (uu) {
        uu.Company = Company;
        uu.Category = Category;
        uu.usedArea1 = usedArea1;
        uu.usedArea2 = usedArea2;
      }
      navigate(`/cosmotics/cosmoticCard`);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // ----------useEffect--------//
  useEffect(() => {
    if (!updateProduct) {
      navigate("/");
    }
  }, [updateProduct, navigate]);
  // --------------------loading--------//
  if (loading) {
    return <Spinner />;
  }
  // ------------------------------------CosmoticUpdate components -----------------//
  return (
    <div>
      {/*-----------------header page-----------------*/}
      <h2>CosmoticUpdate</h2>
      {/*-----------------cancel section-----------------*/}
      <div className="mb-2">
        <Button variant="success" onClick={() => cancelHandler()}>
          Cancel
        </Button>{" "}
      </div>
      {/*-----------------update form-----------------*/}
      {cosmotics
        .filter((c) => c._id === id)
        .map((c, i) => (
          <div
            className="text-light p-2 mb-2"
            key={c._id}
            style={{ backgroundColor: "brown" }}
          >
            {" "}
            <form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder={c.Description} disabled />
              </Form.Group>
              <GoogleLink color="white" name={c.Description} />
              {/*---------updateProduct Company---------*/}{" "}
              <Form.Group className="mb-3">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  id="Company"
                  name="Company"
                  defaultValue={Company}
                  placeholder="Enter Company"
                  onChange={onChange}
                  list="Company1"
                />
                <datalist id="Company1">
                  {CompanyDb.map((c, i) => (
                    <option key={i} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </datalist>
              </Form.Group>{" "}
              {/*-------------updateProduct Category-----------------*/}{" "}
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  id="Category"
                  name="Category"
                  defaultValue={Category}
                  placeholder="Enter Category"
                  onChange={onChange}
                  list="Category1"
                />
                <datalist id="Category1">
                  {useDb
                    .sort((a, b) => (a.name < b.name ? -1 : 1))
                    .map((c, i) => (
                      <option key={i} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                </datalist>
              </Form.Group>{" "}
              {/*-------------updateProduct usedArea-----------------*/}{" "}
              <div className="bg-success p-2 mb-2 rounded-2">
                <Form.Group className="mb-3 col-2">
                  <Form.Label>Used Area</Form.Label>
                  <Form.Control
                    type="text"
                    id="usedArea"
                    name="usedArea"
                    defaultValue={usedArea1 + "," + usedArea2}
                    placeholder="Enter usedArea"
                    // onChange={onChange}
                    disabled
                  />
                </Form.Group>{" "}
                {/*-------------usedArea select-----------------*/}{" "}
                <div className="usedAreaSelect d-flex p-1">
                  {" "}
                  {/*-------------usedArea1 select-----------------*/}{" "}
                  <Form.Select
                    aria-label="Default select example"
                    onChange={onChange}
                    name="usedArea1"
                  >
                    <option>usedArea1</option>
                    {usedAreaDb
                      .sort((a, b) => (a.name < b.name ? -1 : 1))
                      .map((c, i) => (
                        <option key={i} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                  </Form.Select>
                  {/*-------------usedArea2 select-----------------*/}{" "}
                  <Form.Select
                    aria-label="Default select example"
                    onChange={onChange}
                    name="usedArea2"
                  >
                    <option>usedArea12</option>
                    {usedAreaDb
                      .sort((a, b) => (a.name < b.name ? -1 : 1))
                      .map((c, i) => (
                        <option key={i} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                  </Form.Select>
                </div>
              </div>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        ))}
    </div>
  );
};

export default CosmoticUpdate;
