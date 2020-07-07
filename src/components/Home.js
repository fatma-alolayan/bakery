import React from "react";
import { Link } from "react-router-dom";

import { Description, ShopImage, Title } from "../styles";

const Home = () => {
  return (
    <>
      <Link to="/Bakery">Bakery{""}</Link>
      <Title>Bakery</Title>
      <Description>Fresh</Description>
      <ShopImage
        src="https://coleofduty.com/wp-content/uploads/2020/05/Bread-Bakery.jpg"
        alt="bakery"
      />
      <br></br>
    </>
  );
};
export default Home;
