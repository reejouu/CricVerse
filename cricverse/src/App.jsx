import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Tournament from "./pages/Tournament";
import Players from "./pages/Players";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="/tournaments" element={<Tournament />} />
          <Route path="/players" element={<Players />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
