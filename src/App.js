import React from "react";
const styles = {
  text: {
    textAlign: "center",
  },
  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "20%",
  },
  plainImage: {
    width: "200px",
    height: "200px",
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
};
function App() {
  return (
    <div className="App">
      <div>
        <h1 style={styles.text}>Bakery</h1>
        <img
          src="https://coleofduty.com/wp-content/uploads/2020/05/Bread-Bakery.jpg"
          alt="bakery"
          style={styles.shopImage}
        />
      </div>
      <div style={styles.list}>
        <div>
          <img
            src="https://millwayfoods.com/wp-content/uploads/2017/03/Plain-Croissant-800x600.jpg"
            alt="plain croissant"
            style={styles.plainImage}
          />
          <p>Plain Croissant </p>
          <p>1 KD</p>
        </div>
        <div>
          <img
            src="https://www.womanscribbles.net/wp-content/uploads/2017/07/cream-cheese-croissants-7.jpg"
            alt="cheese croissant"
            style={styles.plainImage}
          />
          <p>cheese Croissant </p>
          <p>1.500 KD</p>
        </div>
      </div>
    </div>
  );
}

export default App;
