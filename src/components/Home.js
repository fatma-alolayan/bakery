import React from "react";
import { Link } from "react-router-dom";
//logo
import bake from "../Bake.jpg";
import { Description, ShopImage, Title, HomeButton } from "../styles";

const Home = () => {
  return (
    <>
      <Title>Bakery</Title>
      <Description>Fresh</Description>
      <ShopImage src={bake} alt="logo" />
      <br></br>
    </>
  );
};
export default Home;
