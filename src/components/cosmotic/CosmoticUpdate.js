import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  useDb,
  CompanyDb,
  usedAreaDb,
  formDb,
  companyCategoryDb,
  skinKindDb,
} from "../../data/CosmoticData";
import { mainUrl } from "../../data";
import axios from "axios";
import Spinner from "../Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleLink from "../GoogleLink";

const url = mainUrl + "products";

// -------------------------------CosmoticUpdate components---------------------------------//
const CosmoticUpdate = ({ cosmotics, updateProduct }) => {
  // main constants
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Description: updateProduct.Description,
    Company: updateProduct.Company,
    form: updateProduct.form,
    companyCategory1: updateProduct.companyCategory1,
    companyCategory2: updateProduct.companyCategory2,
    use1: updateProduct.use1,
    use2: updateProduct.use2,
    usedArea1: updateProduct.usedArea1,
    usedArea2: updateProduct.usedArea2,
    skinSenstivety: updateProduct.skinSenstivety,
    normalSkin: updateProduct.normalSkin,
    drySkin: updateProduct.drySkin,
    oilySkin: updateProduct.oilySkin,
    combinationSkin: updateProduct.combinationSkin,
    atopicSkin: updateProduct.atopicSkin,
    price: updateProduct.price,
    picLink: updateProduct.picLink,
  });

  const {
    Description,
    Company,
    form,
    companyCategory1,
    companyCategory2,

    use1,
    use2,
    usedArea1,
    usedArea2,
    skinSenstivety,
    normalSkin,
    drySkin,
    oilySkin,
    combinationSkin,
    atopicSkin,
    price,
    picLink,
  } = formData;
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
        form: form,
        companyCategory1: companyCategory1,
        companyCategory2: companyCategory2,
        use1: use1,
        use2: use2,
        usedArea1: usedArea1,
        usedArea2: usedArea2,
        skinSenstivety: skinSenstivety,
        normalSkin: normalSkin,
        drySkin: drySkin,
        oilySkin: oilySkin,
        combinationSkin: combinationSkin,
        atopicSkin: atopicSkin,
        price: price,
        picLink: picLink,
      });

      setLoading(false);
      console.log(res.data);
      const uu = cosmotics.find((comp) => comp._id === id);
      if (uu) {
        uu.Company = Company;
        uu.form = form;
        uu.companyCategory1 = companyCategory1;
        uu.companyCategory2 = companyCategory2;
        uu.use1 = use1;
        uu.use2 = use2;
        uu.usedArea1 = usedArea1;
        uu.usedArea2 = usedArea2;
        uu.skinSenstivety = skinSenstivety;
        uu.normalSkin = normalSkin;
        uu.drySkin = drySkin;
        uu.oilySkin = oilySkin;
        uu.combinationSkin = combinationSkin;
        uu.atopicSkin = atopicSkin;
        uu.price = price;
        uu.picLink = picLink;
      }
      navigate(`/cosmotics/cosmoticCard/${id}`);
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
        <Button
          variant="primary"
          onClick={() => navigate(`/cosmotics/cosmoticCard/${id}`)}
        >
          Card
        </Button>{" "}
      </div>
      {/*-----------------start update Allform-----------------*/}
      <form
        onSubmit={onSubmit}
        style={{ backgroundColor: "brown" }}
        className="p-2 text-light mb-2 rounded-2"
      >
        <div className="12 d-flex justify-content-around">
          <section className="1 col-6">
            {" "}
            {/*---------start updateProduct Description---------*/}
            <Form.Group className="text-center">
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder={Description}
                disabled
                className="mb-2"
              />
              <GoogleLink color="white" name={Description} />
              {/*---------end updateProduct Description---------*/}
              {/*---------start updateProduct img---------*/}
              {picLink && (
                <img src={picLink} alt="insurance2" className=""></img>
              )}

              {/*---------end updateProduct img---------*/}
            </Form.Group>
          </section>
          <section className="2">
            {" "}
            {/*---------start updateProduct Company---------*/}
            <div className="bg-success p-2 mb-2 rounded-2 d-flex">
              <Form.Group className="me-2">
                <Form.Control placeholder={Company} disabled />
              </Form.Group>
              <Form.Select
                aria-label="Default select example"
                onChange={onChange}
                name="Company"
              >
                <option>Company</option>
                {CompanyDb.sort((a, b) => (a.name < b.name ? -1 : 1)).map(
                  (c, i) => (
                    <option key={i} value={c.name}>
                      {c.name}
                    </option>
                  )
                )}
              </Form.Select>
            </div>
            {/*---------end updateProduct Company---------*/}
            {/*---------start updateProduct form---------*/}
            <div className="bg-success p-2 mb-2 rounded-2 d-flex">
              <Form.Group className="me-2">
                <Form.Control placeholder={form} disabled />
              </Form.Group>
              <Form.Select
                aria-label="Default select example"
                onChange={onChange}
                name="form"
              >
                <option>form</option>
                {formDb
                  .sort((a, b) => (a.name < b.name ? -1 : 1))
                  .map((c, i) => (
                    <option key={i} value={c.name}>
                      {c.name}
                    </option>
                  ))}
              </Form.Select>
            </div>
            {/*---------end updateProduct form---------*/}
            {/*---------start updateProduct company Category---------*/}
            <div className="bg-success p-2 mb-2 rounded-2 d-flex">
              <section className="12-1 me-2">
                {" "}
                <Form.Group className="mb-2">
                  <Form.Label>company Category1</Form.Label>
                  <Form.Control placeholder={companyCategory1} disabled />
                </Form.Group>
                <Form.Select
                  aria-label="Default select example"
                  onChange={onChange}
                  name="companyCategory1"
                >
                  <option>companyCategory1</option>
                  {formDb
                    .sort((a, b) => (a.name < b.name ? -1 : 1))
                    .map((c, i) => (
                      <option key={i} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                </Form.Select>
              </section>
              <section className="12-2">
                <Form.Group className="mb-2">
                  <Form.Label>company Category2</Form.Label>
                  <Form.Control placeholder={companyCategory2} disabled />
                </Form.Group>

                <Form.Select
                  aria-label="Default select example"
                  onChange={onChange}
                  name="companyCategory2"
                >
                  <option>companyCategory2</option>
                  <option value="">no category</option>
                  {companyCategoryDb
                    .sort((a, b) => (a.name < b.name ? -1 : 1))
                    .map((c, i) => (
                      <option key={i} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                </Form.Select>
              </section>
            </div>
            {/*---------end updateProduct company Category---------*/}
            {/*---------start updateProduct  use---------*/}
            <div className="bg-success p-2 mb-2 rounded-2 d-flex">
              <section className="13-1 me-2">
                {" "}
                <Form.Group className="mb-2">
                  <Form.Label>use1</Form.Label>
                  <Form.Control placeholder={use1} disabled />
                </Form.Group>
                <Form.Select
                  aria-label="Default select example"
                  onChange={onChange}
                  name="use1"
                >
                  <option>use1</option>
                  {useDb
                    .sort((a, b) => (a.name < b.name ? -1 : 1))
                    .map((c, i) => (
                      <option key={i} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                </Form.Select>
              </section>
              <section className="13-2 ">
                <Form.Group className="mb-2">
                  <Form.Label>use2</Form.Label>
                  <Form.Control placeholder={use2} disabled />
                </Form.Group>

                <Form.Select
                  aria-label="Default select example"
                  onChange={onChange}
                  name="use2"
                >
                  <option>use2</option>
                  <option value="">no use</option>
                  {useDb
                    .sort((a, b) => (a.name < b.name ? -1 : 1))
                    .map((c, i) => (
                      <option key={i} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                </Form.Select>
              </section>
            </div>
            {/*---------end updateProduct  use---------*/}
            {/*---------start updateProduct  used Area---------*/}
            <div className="bg-success p-2 mb-2 rounded-2 d-flex">
              <section className="14-1 me-2">
                {" "}
                <Form.Group className="mb-2">
                  <Form.Label>usedArea1</Form.Label>
                  <Form.Control placeholder={usedArea1} disabled />
                </Form.Group>
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
              </section>
              <section className="14-2">
                {" "}
                <Form.Group className="mb-2">
                  <Form.Label>usedArea2</Form.Label>
                  <Form.Control placeholder={usedArea2} disabled />
                </Form.Group>
                <Form.Select
                  aria-label="Default select example"
                  onChange={onChange}
                  name="usedArea2"
                >
                  <option>usedArea2</option>
                  <option value="">no use</option>
                  {usedAreaDb
                    .sort((a, b) => (a.name < b.name ? -1 : 1))
                    .map((c, i) => (
                      <option key={i} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                </Form.Select>
              </section>
            </div>
            {/*---------end updateProduct  used Area---------*/}
            {/*---------start updateProduct  skin kind---------*/}
            <div className="bg-warning p-2 mb-2 rounded-2 d-flex">
              {" "}
              <section className="15-1 me-2">
                {" "}
                <Form.Group className="mb-2">
                  <Form.Control placeholder={skinSenstivety} disabled />
                  <Form.Control placeholder={normalSkin} disabled />
                  <Form.Control placeholder={drySkin} disabled />
                  <Form.Control placeholder={oilySkin} disabled />
                  <Form.Control placeholder={combinationSkin} disabled />
                  <Form.Control placeholder={atopicSkin} disabled />
                </Form.Group>
              </section>
              <section className="15-2 ">
                {skinKindDb.map((s, i) => (
                  <Form.Select
                    aria-label="Default select example"
                    onChange={onChange}
                    name={s.name}
                    key={i}
                  >
                    <option value="">--{s.name}--</option>
                    <option value="">{s.option1}</option>
                    <option value={s.option2}>{s.option2}</option>
                  </Form.Select>
                ))}
              </section>
            </div>
            {/*---------end updateProduct  skin kind---------*/}
            {/*---------start updateProduct  price---------*/}
            <div className="bg-success p-2 mb-2 rounded-2 d-flex">
              <Form.Group className="me-2">
                <Form.Label>Price</Form.Label>
                <Form.Control placeholder={price + " SR "} disabled />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={onChange} name="price" />
              </Form.Group>
            </div>
            {/*---------end updateProduct  price---------*/}
            {/*---------start updateProduct  pic Link---------*/}
            <div className="bg-success p-2 mb-2 rounded-2 d-flex">
              <Form.Group className="me-2">
                <Form.Label>Pic Link</Form.Label>
                <Form.Control placeholder={picLink} disabled />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>picLink</Form.Label>
                <Form.Control onChange={onChange} name="picLink" />
              </Form.Group>
            </div>
            {/*---------end updateProduct  pic Link---------*/}
          </section>
        </div>

        {/*---------end updateProduct Allform---------*/}
        <Button
          variant="primary"
          type="submit"
          style={{ width: "-webkit-fill-available" }}
        >
          Submit
        </Button>
      </form>

      {/*-----------------end update form-----------------*/}
    </div>
  );
};

export default CosmoticUpdate;
