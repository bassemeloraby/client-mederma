import React from 'react'
import { InputGroup, Form } from "react-bootstrap";

const CosmoticSearch = ({setQuery}) => {
  return (
    <div className='col-4 shadow'>
    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
    <Form.Control
      type="text"
      placeholder="Search by name or company"
      autoComplete="off"
      autoFocus
      onChange={(e) => setQuery(e.target.value)}
    />
  </InputGroup>{" "}
    </div>
  )
}

export default CosmoticSearch