import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTickets } from "./ticketsAction";

import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";

import { Link } from "react-router-dom";

export const TicketLists = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchAllTickets());
//   }, [dispatch]);
const [str,setStr] = useState('');
useEffect(() => {

},[str])
const handleOnChange = (e) => {
  setStr(e.target.value);  
  console.log(e.target);
}
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str}/>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          < TicketTable />
        </Col>
      </Row>
    </Container>
  );
}; 