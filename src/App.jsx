import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importing pages
import Home from "./pages/Home.jsx";
import NoPage from "./pages/NoPage.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home page */}
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />

          {/* Projects page */}
          <Route path="/Projects" element={<Projects />} />

          {/* Contact us page */}
          <Route path="/Contact" element={<Contact />} />

          {/* No page */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
