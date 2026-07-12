import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/favorites" element={<FavoritesPage />}/> */}
    </Routes>
    </>
  );
}

export default App
