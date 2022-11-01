import React from "react";
import { ReactDOM } from "react";
import Header from "./Header";
import Story from "./Story";
import Posts from "./Posts";
import { BrowserRouter } from "react-router-dom";
import BottomIcons from "./BottomIcons";

function Home() {
  return (
    <>
      <Header />
      <Story />
      <Posts />
    </>
  );
}

export default Home;
