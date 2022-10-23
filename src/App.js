import React from "react";
import { ReactDOM } from "react";
import Header from "./Header";
import Story from "./Story";
import Posts from "./Posts";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Story />
      <Posts />
    </BrowserRouter>
  );
}

export default App;
