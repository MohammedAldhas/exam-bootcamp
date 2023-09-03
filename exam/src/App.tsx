// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Cart from "./Pages/Cart";
import Re from "./Pages/Register";
import "./App.css";

function App() {
  // const id = localStorage.getItem("id");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path= "/:id" element={<Show></Show>}></Route>
        <Route path= "/cart" element={<Cart></Cart>}></Route>
        <Route path= "/sign" element={<Re></Re>}></Route>
      </Routes>
    </>
  );
}

export default App;
