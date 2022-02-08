//import logo from "./logo.svg";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import AlumnDetail from "./components/AlumnDetail";
import AlumnList from "./components/AlumnList";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/list" element={<AlumnList />} />
          <Route exact path="/students/:id" element={<AlumnDetail />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
