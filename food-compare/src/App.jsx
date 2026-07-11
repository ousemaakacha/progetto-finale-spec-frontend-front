import { Routes, Route } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage.jsx";



function App() {
  return (
    <>
    <Routes>
      <Route path="/favorites" element={<FavoritesPage />}/>
    </Routes>
    </>
  );
}

export default App
