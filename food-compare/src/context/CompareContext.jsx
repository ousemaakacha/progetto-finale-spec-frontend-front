import { createContext, useContext, useState } from "react";
import { getFoodById } from "../api/foods";

const CompareContext = createContext();

export function CompareProvider({ children }) {
  const [compareItems, setCompareItems] = useState([]);

  async function addToCompare(food) {
    if (!food || !food.id) return;

    const exists = compareItems.some((item) => item.id === food.id);

    if (exists) return;

    const fullFood = await getFoodById(food.id);

    setCompareItems((prev) => [...prev, fullFood])
    
  }

  function removeFromCompare(id) {
    setCompareItems((prev) => prev.filter((item) => item.id !== id));
  }
  


  function clearCompare() {
    setCompareItems([]);
  }
  
  
  function isInCompare(id) {
    return compareItems.some((item) => item.id === id);
  }


  return (
    <CompareContext.Provider
      value={{ 
        compareItems, 
        addToCompare, 
        isInCompare, 
        removeFromCompare, 
        clearCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  return useContext(CompareContext);
}
