import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CompanyDb } from "../../data/CosmoticData";
import CosmoticGridCard from "../../components/cosmotic/CosmoticGridCard";

const InfiniteScrollExample = () => {
  const [items, setItems] = useState([]);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const [companies, setCompanies] = useState(CompanyDb);
  const [list, setList] = useState(items);

  const handleChangeChecked = (id) => {
    const cusinesStateList = companies;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCompanies(changeCheckedCuisines);
  };

  // ... rest of the component
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://rich-blue-llama-vest.cyclic.cloud/api/products?page=${page}`
      );
      const data = await response.json();

      setItems((prevItems) => [...prevItems, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let updatedList = items;

      // Cuisine Filter
      const cuisinesChecked = companies
        .filter((item) => item.checked)
        .map((item) => item.name);

      if (cuisinesChecked.length) {
        updatedList = updatedList.filter((item) =>
          cuisinesChecked.includes(item.Company)
        );
        setList(updatedList);
      } else {
        setList(items);
      }
    };
    applyFilters();
  }, [companies, items]);

  return (
    <div>
      <h2>CosmoticSF infinite scroll</h2>
      <section className="d-flex">
        <div className="1-sb col-2 border-end  border-warning" >
          {companies.map((c, i) => (
            <label className="me-2 d-flex" key={i}>
              <input
                type="checkbox"
                checked={c.checked}
                onChange={() => handleChangeChecked(c.id)}
                className="me-1"
              />
              <span>{c.name}</span>
            </label>
          ))}
        </div>
        <div className="2-mb ps-1">
          {" "}
          <InfiniteScroll
            dataLength={items.length}
            next={fetchData}
            hasMore={true} // Replace with a condition based on your data source
            loader={<p>Loading...</p>}
            endMessage={<p>No more data to load.</p>}
          >
            <div className="d-flex container flex-wrap justify-content-between">
              {list.map((item, i) => (
                <CosmoticGridCard prod={item} key={i} />
              ))}
            </div>
          </InfiniteScroll>
          {error && <p>Error: {error.message}</p>}
        </div>
      </section>
    </div>
  );
};
export default InfiniteScrollExample;
