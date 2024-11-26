import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BookSearch from "./components/BookSearch/BookSearch";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/bookSearch" element={<BookSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
