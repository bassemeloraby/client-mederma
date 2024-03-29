import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { mainUrl } from "../../data";
import axios from "axios";
import Spinner from "../../components/Spinner";
import CosmoticList from "../../components/cosmotic/CosmoticList";
import CosmoticUpdate from "../../components/cosmotic/CosmoticUpdate";
import CosmoticCard from "../../components/cosmotic/CosmoticCard";
import CosmoticFilter from "../../components/cosmotic/CosmoticFilter";
import CosmoticSF from "../../components/cosmotic/CosmoticSF";
import Diaper from "../../components/cosmotic/Diaper";
import CosmoticAdmin from "./CosmoticAdmin";
import SearchInput from "../../components/SearchInput";

// const url = "/api/products";
const url = mainUrl + "products";
const Cosmotics = () => {
  const [cosmotics, setCosmotics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState();
  const [updateProduct, setUpdateProduct] = useState();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchCosmotics = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${url}`);
        setLoading(false);
        setCosmotics(res.data);
        console.log(res.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchCosmotics();
  }, []);

  useEffect(() => {
    if (!query) setItems(cosmotics);
    setItems((_) =>
      cosmotics.filter(
        (x) =>
          x.Description.toLowerCase().includes(query?.toLowerCase()) ||
          x.Company.toLowerCase().includes(query?.toLowerCase()) ||
          x.intBarcode?.includes(query)
      )
    );
  }, [query, cosmotics]);

  useEffect(() => {
    setItems(cosmotics);
  }, [cosmotics]);

  if (loading) {
    return <Spinner />;
  }
  // ------------------------------------cosmotic components -----------------//
  return (
    <div>
      {/*-----------------header page-----------------*/}
      <div className="d-flex mb-2 justify-content-center">
        <h2>Cosmotics</h2>
      </div>
      {/*-----------------cosmotics routes-----------------*/}
      <Routes>
        {/*-----------------cosmoticSearch-----------------*/}
        <Route
          path="cosmoticSearch"
          element={
            <div className="container">
              {" "}
              <SearchInput setQuery={setQuery} placeholder="enter id or company or product" />
              <CosmoticList
                items={items}
                setUpdateProduct={setUpdateProduct}
                user={user}
                setItems={setItems}
                loading={loading}
                setLoading={setLoading}
              />
            </div>
          }
        />

        {/*-----------------CosmoticUpdate-----------------*/}
        <Route
          key={1}
          path="cosmoticUpdate/:id"
          element={
            <CosmoticUpdate
              updateProduct={updateProduct}
              user={user}
              cosmotics={cosmotics}
            />
          }
        />
        {/*-----------------cosmoticCard-----------------*/}

        <Route
          path="cosmoticCard/:id"
          element={
            <CosmoticCard
              cosmotics={cosmotics}
              setUpdateProduct={setUpdateProduct}
              user={user}
            />
          }
        />
        {/*-----------------cosmoticFilter-----------------*/}

        <Route
          path="cosmoticFilter"
          element={
            <CosmoticFilter
              cosmotics={cosmotics}
              user={user}
              setUpdateProduct={setUpdateProduct}
            />
          }
        />
        <Route
          path="cosmoticSF"
          element={
            <CosmoticSF
              cosmotics={cosmotics}
              user={user}
              setUpdateProduct={setUpdateProduct}
            />
          }
        />
        <Route
          path="diapers"
          element={
            <Diaper
              cosmotics={cosmotics}
              user={user}
              setUpdateProduct={setUpdateProduct}
            />
          }
        />
        <Route
          path="cosmoticAdmin"
          element={<CosmoticAdmin cosmotics={cosmotics} user={user} />}
        />
      </Routes>
    </div>
  );
};

export default Cosmotics;
