<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookSearch from "./components/bookSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/bookSearch" element={<BookSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>> 2d9ba3fc5e5659c217e991a12b8b1636c12c8d31
  );
}

export default App;
