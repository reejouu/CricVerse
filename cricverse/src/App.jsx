import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Tournament from "./pages/Tournament";
import Players from "./pages/Players";
import Layout from "./Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route
            path="/tournaments"
            element={<Tournament transparent={true} />}
          />
          <Route path="/players" element={<Players />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />

        </Route>
      </Routes>
    </>
  );
};

export default App;
