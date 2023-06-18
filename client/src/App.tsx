import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import FullPost from "./pages/FullPost";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/posts/:id/edit" element={<AddPost />} />
        <Route path="/posts/:id" element={<FullPost />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
