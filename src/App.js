import React from "react";
import { ReactDOM } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage";
import Profile from "./Profile";
import Message from "./Messages";
import NotifyFeed from "./NotifyFeed";
import BottomIcons from "./BottomIcons";
import PhoneMessage from "./PhoneMessage";
import SearchPage from "./SearchPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/notifyFeed" element={<NotifyFeed />} />
        <Route path="/texts" element={<PhoneMessage />} />
        <Route path="/searchPage" element={<SearchPage />} />
      </Routes>
      <BottomIcons/>
    </BrowserRouter>
  );
}

export default App;
