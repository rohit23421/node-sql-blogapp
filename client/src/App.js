import { Route, Link, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";

import "./style.scss";

function App() {
  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post/:id" element={<Single />} />
            <Route path="/write" element={<Write />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
