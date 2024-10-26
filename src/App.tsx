import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout.tsx";
import Contact from "./components/Contact.tsx";
import Home from "./components/Home.tsx";
import WomenClothes from "./Categories/Women/page.tsx";
import Men from "./Categories/Men/page.tsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<WomenClothes />} />
          <Route path="/men" element={<Men />} />
          <Route path="/accessories" element={<Contact />} />
          <Route path="/sales" element={<Contact />} />
          <Route path="/gifts" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
