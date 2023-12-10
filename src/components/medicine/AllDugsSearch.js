import React from 'react'
import { InputGroup, Form } from "react-bootstrap";

function AllDugsSearch({setQuery}) {
  return (
    <div className='col-4 shadow'>
    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
    <Form.Control
      type="text"
      placeholder="Search by Trade Name or Scientific Name"
      autoComplete="off"
      autoFocus
      onChange={(e) => setQuery(e.target.value)}
    />
  </InputGroup>{" "}
    </div>
  )
}

export default AllDugsSearch
