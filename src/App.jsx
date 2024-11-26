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
  );
}

export default App;
