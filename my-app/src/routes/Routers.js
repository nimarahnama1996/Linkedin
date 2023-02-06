import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";



import Home from '../pages/Home';
import MyNetwork from '../pages/MyNetwork';



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/mynetwork" element={<MyNetwork/>} />
    </Routes>
  )
}

export default Routers