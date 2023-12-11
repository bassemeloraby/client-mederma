import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { takeScreenShot } from "../../utils";

const Tot = () => {
  const [master, setMaster] = useState(0);
  const [span, setSpan] = useState(0);
  const [visa, setVisa] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [tot, setTot] = useState(0);
  const bank = parseInt(master) + parseInt(span) + parseInt(visa);
  const [vat, setVat] = useState(0);

  const clear = () => {
    setMaster(0);
    setSpan(0);
    setVisa(0);
    setInsurance(0);
    setTot(0);
    setVat(0);
  };

  const captureScreenShot = () => {
    takeScreenShot("capDiv", "MyImage", "image/jpeg", "#f5f5f5");
  };

  return (
    <div className="mt-2">
      <section className="1 col-3 me-2">
        {" "}
        <Table striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Master</td>
              <td>
                {" "}
                <input
                  value={master}
                  onChange={(e) => setMaster(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Span</td>
              <td>
                {" "}
                <input value={span} onChange={(e) => setSpan(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>Visa</td>
              <td>
                <input value={visa} onChange={(e) => setVisa(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>Bank</td>
              <td className="text-center">
                <h3 className="border bg-warning"> {bank}</h3>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>

      <section
        className="2 col-3 rounded border border-5 border-primary"
        id="capDiv"
      >
        {" "}
        <Table striped bordered hover variant="success">
          <thead>
            <tr>
              <th>Kind</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Cash :<td>{tot - (parseInt(bank) + parseInt(insurance))}</td>
              </td>
            </tr>
            <tr>
              <td>
                Span : <span className="border">{bank}</span>
              </td>
            
            </tr>
            <tr>
              <td>
                Insurance{" "}
                <input
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                />
              </td>
              
            </tr>
            <tr>
              <td>
                Tot{" "}
                <input value={tot} onChange={(e) => setTot(e.target.value)} />
              </td>
              
            </tr>
            <tr>
              <td>
                Vat{" "}
                <input value={vat} onChange={(e) => setVat(e.target.value)} />
              </td>
              
            </tr>
            <tr>
              <td>Tot - Vat : <span>{tot - vat} </span></td>
              
            </tr>
          </tbody>
          <button onClick={clear} className="bg-danger">
            clear
          </button>
          <button onClick={captureScreenShot}>screenshot</button>
        </Table>
      </section>
    </div>
  );
};

export default Tot;
