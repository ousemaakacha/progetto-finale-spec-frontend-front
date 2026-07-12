import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import DetailPage from "./pages/Detailpage.jsx";
import ComparePage from "./pages/ComparePage.jsx";




function App() {
  return (
    <>
    <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />}/>
          <Route path="/foods/:id" element={<DetailPage />} />
          <Route path="/compare" element={<ComparePage />} />
        </Routes>
      </main>
      </>
  );
      
}

export default App
