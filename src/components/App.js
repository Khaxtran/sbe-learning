import React from "react";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import HostScreen from "./HostScreen";
import Account from "./Account/Account";
import Signup from "./Signup";
import Login from "./Login";
import StudentAccess from "./StudentAccess";
import UpdateProfile from "./Account/UpdateProfile";
import ForgotPassword from "./ForgotPassword";
import PrivateRoutes from "./PrivateRoutes";
import { AuthProvider } from "../contexts/AuthContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Addition from "../components/Games/Addition/Addition"

function App() {

  return (
    <Router>
      <AuthProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route element={<PrivateRoutes />}>
              <Route
                path="dashboard"
                element={<Dashboard />}
              />
              <Route path="/account" element={<Account />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/games/host" element={<HostScreen />}/>
              <Route path="/games/addition" element={<Addition />}/>
            </Route>
            <Route
              path="/student"
              element={<StudentAccess />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
