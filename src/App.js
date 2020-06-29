import React from "react";
import items from "./items";
import styles from "./styles";

function App() {
  const bakeryList = items.map((item) => (
    <div style={styles.list} key={item.id}>
      <img style={styles.plainImage} alt={item.name} src={item.image} />
      <p style={styles.text}> {item.name} </p>
      <p style={styles.text}> {item.price} KD</p>
    </div>
  ));
  return (
    <div>
      <div>
        <h1 style={styles.text}>Bakery</h1>
        <img
          src="https://coleofduty.com/wp-content/uploads/2020/05/Bread-Bakery.jpg"
          alt="bakery"
          style={styles.shopImage}
        />
      </div>
      <div> {bakeryList}</div>
    </div>
  );
}

export default App;
