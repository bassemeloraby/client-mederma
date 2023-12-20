import React from 'react'
import { InputGroup, Form } from "react-bootstrap";

const SearchInput = ({setQuery}) => {
  return (
    <div className=' shadow'>
    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
    <Form.Control
      type="text"
      placeholder="Enter Search Value"
      autoComplete="off"
      autoFocus
      onChange={(e) => setQuery(e.target.value)}
    />
  </InputGroup>{" "}
    </div>
  )
}

export default SearchInput