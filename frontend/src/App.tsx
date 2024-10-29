import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout.tsx";
import Home from "./components/Home.tsx";
import WomenClothes from "./Categories/Women/page.tsx";
import Men from "./Categories/Men/page.tsx";
import Accessories from "./Categories/Accessories/page.tsx";
import Sales from "./Categories/Sales/page.tsx";
import Gifts from "./Categories/Gifts/page.tsx";
import Profile from "./Categories/Profile/page.tsx";
import Login from "./Authentication/Login.tsx";
import Register from "./Authentication/Register.tsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<WomenClothes />} />
          <Route path="/men" element={<Men />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
