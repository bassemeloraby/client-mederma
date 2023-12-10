import React, { useState } from "react";

const Tot = () => {
  const [master, setMaster] = useState(0);
  const [span, setSpan] = useState(0);
  const [visa, setVisa] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [tot, setTot] = useState(0);
  const bank = parseInt(master) + parseInt(span) + parseInt(visa);
  const [vat, setVat] = useState(0);

  return (
    <div className="mt-2 row col-2">
      <input value={master} onChange={(e) => setMaster(e.target.value)}  />
      <input value={span} onChange={(e) => setSpan(e.target.value)} />
      <input value={visa} onChange={(e) => setVisa(e.target.value)} />
      <hr/>
      <span className="border bg-warning">bank = {bank}</span>
      <span>cash = {tot - (parseInt(bank) + parseInt(insurance))} </span>
      insurance
      <input value={insurance} onChange={(e) => setInsurance(e.target.value)} />
      tot
      <input value={tot} onChange={(e) => setTot(e.target.value)} />
      vat
      <input value={vat} onChange={(e) => setVat(e.target.value)} />
      <span>tot-vat = {tot - vat} </span>
    </div>
  );
};

export default Tot;
