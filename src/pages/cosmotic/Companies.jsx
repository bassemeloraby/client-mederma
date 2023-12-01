import React from "react";
import { CompanyDb } from "../../data/CosmoticData";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const Companies = () => {
  return (
    <div>
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
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                  <Link to={ourPro} target="_blank" rel="noopener noreferrer">
                    {ourPro}
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
