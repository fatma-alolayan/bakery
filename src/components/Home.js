import React from "react";

//logo
import bake from "../Bake.jpeg";
import { Description, ShopImage, Title } from "../styles";

const Home = () => {
  return (
    <>
      <Title>Bakery</Title>
      <br />
      <Description> Bake it till you make it </Description>

      <ShopImage src={bake} alt="logo" />

      <br></br>
    </>
  );
};
export default Home;
