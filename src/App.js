import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import { auth } from "./firebase";


import HomeDashboard from "./HomeDashboard";

function App() {
  const [, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/weatherbuddy" element={<HomeDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
