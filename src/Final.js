import React from "react";
import { CardImg, Card } from "reactstrap";

const Final = () => {
  return (
    <>
      <Card style={{ width: "40%", margin: "20px auto" }}>
        <h2 style={{ margin: "20px auto", textAlign: "center" }}>
          Congratulations your tacos are on your way!
        </h2>
        <CardImg
          src="https://media.giphy.com/media/WNs0uptipSG40/giphy.gif"
          alt="You get a taco!"
        />
      </Card>
    </>
  );
};

export default Final;
