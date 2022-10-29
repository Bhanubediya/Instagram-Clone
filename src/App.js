import React from "react";
import { ReactDOM } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage";
import Profile from "./Profile";
import Message from "./Messages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
