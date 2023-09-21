import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import OneProfile from "./screens/detail/OneProfile";
import Page404 from "./screens/404/Page404";
import Home from "./screens/list/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="character/:id" element={<OneProfile />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
