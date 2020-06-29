import React from "react";
import styles from "./styles";
import BakeryList from "./components/BakeryList";

function App() {
  return (
    <div>
      <div>
        <h1 style={styles.text}>Bakery</h1>
        <img
          src="https://coleofduty.com/wp-content/uploads/2020/05/Bread-Bakery.jpg"
          alt="bakery"
          style={styles.shopImage}
        />
        <br></br>
      </div>
      <BakeryList />
    </div>
  );
}

export default App;
