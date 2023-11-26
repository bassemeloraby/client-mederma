// import React, { useEffect, useState } from "react";
import CosmoticList from "./CosmoticList";

const Diaper = ({ cosmotics, setUpdateProduct, user }) => {
  // const [list, setList] = useState();

  // useEffect(() => {
  //   setList(cosmotics.filter(c => c.mainClass === "diaper"))
  // }, [cosmotics]);
 const list = cosmotics.filter(c => c.mainClass === "diaper")

  return (
    <div>
      <h3>Diaper</h3>
      
      <CosmoticList
        items={list}
        setUpdateProduct={setUpdateProduct}
        user={user}
      />
    </div>
  );
};

export default Diaper;
