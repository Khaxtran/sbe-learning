import React from "react";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import GameLobby from "./GameLobby";
import Account from "./Account/Account";
import Signup from "./Signup";
import Login from "./Login";
import StudentAccess from "./StudentAccess";
import UpdateProfile from "./Account/UpdateProfile";
import ForgotPassword from "./ForgotPassword";
import PrivateRoutes from "./PrivateRoutes";
import { AuthProvider } from "../contexts/AuthContext";
import { PlayersProvider } from "../contexts/PlayersProvider";
import useLocalStorage from "../hooks/useLocalStorage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // react-router-dom

function App() {
  const [gamecode, setGamecode] = useLocalStorage("pin", 0);
  return (
    <Router>
      <AuthProvider>
        <PlayersProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route element={<PrivateRoutes />}>
              <Route
                path="dashboard"
                element={<Dashboard gamecode={setGamecode} />}
              />
              <Route path="/account" element={<Account />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route
                path="/game-lobby"
                element={<GameLobby gamecode={gamecode} />}
              />
            </Route>
            <Route
              path="/student"
              element={<StudentAccess gamecode={gamecode} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </PlayersProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
