import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  );
}

export default Routers;
