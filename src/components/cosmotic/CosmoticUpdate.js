import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  useDb,
  CompanyDb,
  usedAreaDb,
  formDb,
  companyCategoryDb,
  skinKindDb,
  freeDb,
} from "../../data/CosmoticData";
import { mainUrl } from "../../data";
import axios from "axios";
import Spinner from "../Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleLink from "../GoogleLink";
import { FormLabel } from "react-bootstrap";

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
    compProType: updateProduct.compProType,
    form: updateProduct.form,
    companyCategory1: updateProduct.companyCategory1,
    companyCategory2: updateProduct.companyCategory2,
    use1: updateProduct.use1,
    use2: updateProduct.use2,
    usedArea1: updateProduct.usedArea1,
    usedArea2: updateProduct.usedArea2,
    skinSensitivity: updateProduct.skinSensitivity,
    normalSkin: updateProduct.normalSkin,
    drySkin: updateProduct.drySkin,
    oilySkin: updateProduct.oilySkin,
    combinationSkin: updateProduct.combinationSkin,
    atopicSkin: updateProduct.atopicSkin,
    aknePoreSkin: updateProduct.aknePoreSkin,
    hyperpigmentedSkin: updateProduct.hyperpigmentedSkin,
    flushedSkin: updateProduct.flushedSkin,
    irritatedSkin: updateProduct.irritatedSkin,
    damagedSkin: updateProduct.damagedSkin,
    price: updateProduct.price,
    picLink: updateProduct.picLink,
    soapFree: updateProduct.soapFree,
    paraffinFree: updateProduct.paraffinFree,
    fregranceFree: updateProduct.fregranceFree,
    dose: updateProduct.dose,
    intBarcode: updateProduct.intBarcode,
    intBarcode1: updateProduct.intBarcode1,
  });

  const {
    Description,
    Company,
    compProType,
    form,
    companyCategory1,
    companyCategory2,
    use1,
    use2,
    usedArea1,
    usedArea2,
    skinSensitivity,
    normalSkin,
    drySkin,
    oilySkin,
    combinationSkin,
    atopicSkin,
    aknePoreSkin,
    hyperpigmentedSkin,
    flushedSkin,
    irritatedSkin,
    damagedSkin,
    price,
    picLink,
    soapFree,
    paraffinFree,
    fregranceFree,
    dose,
    intBarcode,
    intBarcode1,
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
        Description,
        Company,
        compProType,
        form,
        companyCategory1,
        companyCategory2,
        use1,
        use2,
        usedArea1,
        usedArea2,
        skinSensitivity,
        normalSkin,
        drySkin,
        oilySkin,
        combinationSkin,
        atopicSkin,
        aknePoreSkin,
        hyperpigmentedSkin,
        flushedSkin,
        irritatedSkin,
        damagedSkin,
        price,
        picLink,
        soapFree,
        paraffinFree,
        fregranceFree,
        dose,
        intBarcode,
        intBarcode1,
      });

      setLoading(false);
      console.log(res.data);
      const uu = cosmotics.find((comp) => comp._id === id);
      if (uu) {
        uu.Description = Description;
        uu.Company = Company;
        uu.compProType = compProType;
        uu.form = form;
        uu.companyCategory1 = companyCategory1;
        uu.companyCategory2 = companyCategory2;
        uu.use1 = use1;
        uu.use2 = use2;
        uu.usedArea1 = usedArea1;
        uu.usedArea2 = usedArea2;
        uu.skinSensitivity = skinSensitivity;
        uu.normalSkin = normalSkin;
        uu.drySkin = drySkin;
        uu.oilySkin = oilySkin;
        uu.combinationSkin = combinationSkin;
        uu.atopicSkin = atopicSkin;
        uu.aknePoreSkin = aknePoreSkin;
        uu.hyperpigmentedSkin = hyperpigmentedSkin;
        uu.flushedSkin = flushedSkin;
        uu.irritatedSkin = irritatedSkin;
        uu.damagedSkin = damagedSkin;
        uu.price = price;
        uu.picLink = picLink;
        uu.soapFree = soapFree;
        uu.paraffinFree = paraffinFree;
        uu.fregranceFree = fregranceFree;
        uu.dose = dose;
        uu.intBarcode = intBarcode;
        uu.intBarcode1 = intBarcode1;
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
          {/*----------------------- the left half --------------------------------------------------- */}
          <section className="1 col-6">
            {" "}
            {/*---------start updateProduct Description---------*/}
            <div className="1-1">
              {" "}
              
              <Form.Group className="text-center">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  placeholder={Description}
                  disabled
                  className="mb-2 "
                />
                <Form.Control
                className="mb-2"
                onChange={onChange}
                name="Description"
                defaultValue={Description}
              />
                <GoogleLink color="white" name={Description} />
                {CompanyDb.filter((c) => c.name === Company).map((c, i) => (
                  <Link
                    to={`${c.ourPro}${companyCategory1}/${compProType}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                    className="ms-2"
                  >
                    product site
                  </Link>
                ))}

                {/*---------end updateProduct Description---------*/}
                {/*---------start updateProduct img---------*/}
                {picLink && (
                  <div class="div-img mb-2">
                    <img src={picLink} alt="insurance2" className="img1"></img>
                  </div>
                )}

                {/*---------end updateProduct img---------*/}
              </Form.Group>
            </div>
            <div className="1-2 d-flex bg-success p-2 mb-2 rounded-2 justify-content-center">
              <section className="1-2-1 me-2">
                {" "}
                <Form.Group className="">
                  <Form.Control
                    placeholder={soapFree}
                    disabled
                    className="mb-2"
                  />
                  <Form.Control
                    placeholder={paraffinFree}
                    disabled
                    className="mb-2"
                  />
                  <Form.Control
                    placeholder={fregranceFree}
                    disabled
                    className="mb-2"
                  />
                </Form.Group>
              </section>
              <section className="1-2-2">
                {freeDb.map((s, i) => (
                  <Form.Select
                    aria-label="Default select example"
                    onChange={onChange}
                    name={s.name}
                    key={i}
                    className="mb-2"
                  >
                    <option value="">--{s.name}--</option>
                    <option value="">no</option>
                    <option value={s.name}>{s.name}</option>
                  </Form.Select>
                ))}
              </section>
            </div>
            {/*--------------------------start dose---------------------------------------- */}
            <div className="1-2 bg-success p-2 mb-2 rounded-2 justify-content-center">
              <FormLabel> Dose</FormLabel>
              <Form.Group className="">
                <Form.Control placeholder={dose} disabled className="mb-2" />
              </Form.Group>
              <Form.Group className="">
                <Form.Control
                  className="mb-2"
                  onChange={onChange}
                  name="dose"
                />
              </Form.Group>
            </div>
            {/*--------------------------start intBarcode---------------------------------------- */}
            <div className="1-2 bg-success p-2 mb-2 rounded-2 justify-content-center">
              <FormLabel>International barcode</FormLabel>

              <Form.Group className="">
                <Form.Control
                  placeholder={intBarcode}
                  disabled
                  className="mb-2"
                />
              </Form.Group>
              <Form.Group className="">
                <Form.Control
                  className="mb-2"
                  onChange={onChange}
                  name="intBarcode"
                />
              </Form.Group>
              <FormLabel>International barcode 1</FormLabel>

              <Form.Group className="">
                <Form.Control
                  placeholder={intBarcode1}
                  disabled
                  className="mb-2"
                />
              </Form.Group>
              <Form.Group className="">
                <Form.Control
                  className="mb-2"
                  onChange={onChange}
                  name="intBarcode"
                />
              </Form.Group>
            </div>
          </section>
          {/*----------------------- the wright half --------------------------------------------------- */}
          <section className="2">
            {" "}
            {/*----start company product name --------*/}
            <div className="bg-success p-2 mb-2 rounded-2 d-flex">
              <Form.Group className="me-2 col-12 ">
                <Form.Control
                  className="text-lowercase"
                  placeholder={
                    Company + " " + companyCategory1 + " " + compProType
                  }
                  disabled
                />
              </Form.Group>
            </div>
            {/*----end company product name --------*/}
            {/*---------start updateProduct Company---------*/}
            <FormLabel> Company</FormLabel>
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
            {/*---------start updateProduct compProType---------*/}
            <FormLabel> Company Product Type</FormLabel>
            <div className="bg-success p-2 mb-2 rounded-2 d-flex">
              <Form.Group className="me-2">
                <Form.Control placeholder={compProType} disabled />
              </Form.Group>
              <Form.Group className="">
                <Form.Control onChange={onChange} name="compProType" />
              </Form.Group>
            </div>
            {/*---------end updateProduct compProType---------*/}
            {/*---------start updateProduct form---------*/}
            <FormLabel> Form</FormLabel>
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
            <FormLabel> Skin Kind</FormLabel>
            <div className="bg-warning p-2 mb-2 rounded-2 d-flex">
              {" "}
              <section className="15-1 me-2">
                {" "}
                <Form.Group className="mb-2">
                  <Form.Control
                    placeholder={skinSensitivity}
                    disabled
                    className="border-bottom border-warning"
                  />
                  <Form.Control
                    placeholder={normalSkin}
                    disabled
                    className="border-bottom border-warning"
                  />
                  <Form.Control
                    placeholder={drySkin}
                    disabled
                    className="border-bottom border-warning"
                  />
                  <Form.Control
                    placeholder={oilySkin}
                    disabled
                    className="border-bottom border-warning"
                  />
                  <Form.Control
                    placeholder={combinationSkin}
                    disabled
                    className="border-bottom border-warning"
                  />
                  <Form.Control
                    placeholder={atopicSkin}
                    disabled
                    className="border-bottom border-warning"
                  />
                  <Form.Control
                    placeholder={aknePoreSkin}
                    disabled
                    className="border-bottom border-warning"
                  />
                  <Form.Control
                    placeholder={hyperpigmentedSkin}
                    disabled
                    className="border-bottom border-warning"
                  />
                  <Form.Control
                    placeholder={flushedSkin}
                    disabled
                    className="border-bottom border-warning"
                  />
                  <Form.Control
                    placeholder={irritatedSkin}
                    disabled
                    className="border-bottom border-warning"
                  />
                  <Form.Control
                    placeholder={damagedSkin}
                    disabled
                    className="border-bottom border-warning"
                  />
                </Form.Group>
              </section>
              <section className="15-2 ">
                {skinKindDb.map((s, i) => (
                  <Form.Select
                    aria-label="Default select example"
                    onChange={onChange}
                    name={s.name}
                    key={i}
                    className="border-bottom border-warning"
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
