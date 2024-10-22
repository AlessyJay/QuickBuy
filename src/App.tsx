import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout.tsx";
import Shop from "./components/Shop.tsx";
import Contact from "./components/Contact.tsx";
import Home from "./components/Home.tsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
