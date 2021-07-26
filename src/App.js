import React, { useState } from "react";
import logo from './logo.svg';

import Icon from "./components/Icon"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const itemArray = new Array(9).fill("empty");

const App = () => {

  // States
  const [isCross, setisCross] = useState(false);
  const [winMessage, setWinMessage] = useState("O's Win!");

  // Methods
  const reloadGame = () => {
    // reload game
    setisCross(false)
    setWinMessage("")
    itemArray.fill("empty", 0, 9)
  };
  const checkIsWinner = () => {
    // check if won
  };
  const changeItem = itemNUmber => {
    // change square
    if(winMessage) {
      return toast(winMessage, {type: "success"});
    }

    if (itemArray[itemNUmber] === "empty") {
      itemArray[itemNUmber] = isCross ? "cross" : "circle"
      setisCross(!isCross)
    } else {
      return toast("already filled", {type: "error"})
    }

    checkIsWinner();

  };


  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          { winMessage ? (
              <div className="mb-2 mt-2">
                <h1 className="text-primary text-uppercase text-center">
                  {winMessage}
                </h1>
                <Button
                  color="success"
                  block
                  onClick={reloadGame}
                />
              </div>
          ) : (
              <h1 className="text-center text-warning">
                {isCross ? "X" : "O"}'s turn
              </h1>
          )}
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
