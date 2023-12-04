import React from "react";
import { CompanyDb } from "../../data/CosmoticData";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const Companies = () => {
  return (
    <div className="container">
      <h2>Companies</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {CompanyDb.map((c, i) => {
            const { id, name, ourPro } = c;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td >
                  <Link className="text-wrap" to={ourPro} target="_blank" rel="noopener noreferrer">
                  {name}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Companies;
