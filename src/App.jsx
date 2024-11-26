import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import { Camera } from 'lucide-react';
import Home from "./components/Home";
import BookSearch from "./components/bookSearch";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
        <Route path="/bookSearch" element={<BookSearch />} />
        <Route path="/" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;