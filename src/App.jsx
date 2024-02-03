import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importing pages
import Home from "./pages/Home.jsx";
import NoPage from "./pages/NoPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home page */}
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />

          {/* No page */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
