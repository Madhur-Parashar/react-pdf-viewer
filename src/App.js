import React, { Component } from "react";
import Header from "./components/Header/Header";
import SelectPdf from "./components/SelectPdf/SelectPdf";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SelectPdf />
      </div>
    );
  }
}

export default App;
