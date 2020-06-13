import React from "react";
import { Button, Navbar, Card, CardImg } from "reactstrap";
import { Route, Link } from "react-router-dom";
import OrderForm from "./Form.js";
import Final from "./Final.js"

const App = () => {
  return (
    <>
      <Navbar color="info">
        <h1 style={{ color: "white" }}>WeEat</h1>
        <Link to="/">
          <Button color="info">Home</Button>
        </Link>
      </Navbar>
      <Route exact path="/">
        <Card>
          <CardImg src={require("./assets/taco.jpeg")} />
          <Link to={"/taco"}>
            <Button
              color="info"
              style={{ position: "absolute", left: "50%", top: "50%" }}
            >
              Tacos!
            </Button>
          </Link>
        </Card>
      </Route>
      <Route path='/taco'>
        <OrderForm />
      </Route>
      <Route path="/final">
        <Final />
      </Route>
    </>
  );
};
export default App;
