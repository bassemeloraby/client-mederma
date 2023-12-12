import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

const CosmoticAdmin = () => {
  const [items, setItems] = useState([]);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

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

  return (
    <div>
      {" "}
      <h2>CosmoticAdmin</h2>
      <div className="">
        {" "}
        <InfiniteScroll
          dataLength={items.length}
          next={fetchData}
          hasMore={true} // Replace with a condition based on your data source
          loader={<p>Loading...</p>}
          endMessage={<p>No more data to load.</p>}
        >
          <div className="">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>intBarcode</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {items.map((it, i) => {
                  const { Description,intBarcode } = it;
                  return (
                    <tr key={i}>
                      <td>{Description}</td>
                      <td>{intBarcode}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </InfiniteScroll>
        {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  );
};

export default CosmoticAdmin;
