import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Icon from "./components/Icon"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, BUtton, Col, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

const itemArray = new Array(9).fill("empty");

const App = () => {

  // States
  const [isCross, setisCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  // Methods
  const reloadGame = () => {
    // reload game
  }
  const checkIsWinner = () => {
    // check if won
  }
  const changeItem = itemNUmber => {
    // change square
  }


  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          <div className="grid">
            { itemArray.map( (item, index) => (
                <Card>
                  <CardBody className="box">
                    <Icon name={item}/>
                  </CardBody>
                </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
