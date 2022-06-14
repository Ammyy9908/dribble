import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/session/new" element={<Login />} />
        <Route exact path="/signup/new" element={<SignUp />} />
        <Route exact path="/search" element={<Search />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
