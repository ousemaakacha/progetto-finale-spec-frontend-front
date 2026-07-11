import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

// chiave di salvataggio per lettura preferiti dal localstorage
const STORAGE_KEY = "foodcompare_favorites";


export function FavoritesProvider({children}){
    const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  
  function isFavorite(id) {
    return favorites.some((food) => food.id === id);
  }


    function toggleFavorite(food) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.some((item) => item.id === food.id)) {
        return currentFavorites.filter((item) => item.id !== food.id);
      }

      return [...currentFavorites, food];
    });
  }


    return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );

}

export function useFavorites() {
  return useContext(FavoritesContext);
}
