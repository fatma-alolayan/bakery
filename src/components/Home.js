import React from "react";
import { Link } from "react-router-dom";

import { Description, ShopImage, Title, HomeButton } from "../styles";

const Home = () => {
  return (
    <>
      <Link to="/Bakery">
        <HomeButton>Menu</HomeButton>
      </Link>
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
