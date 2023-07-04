import Header from "./Header";
import React from "react";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="banner">
        <img src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" alt="Amazon Logo"/>
      </div>
      <Product/>
    </div>
  );
}

export default App;
