const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

// funzione per recuperare lista alimenti e applicare rispettivi filtri
export async function getFoods({ search = "", category = "" } = {}) {

  
  const queryParams = [];

  if (search.trim()) {
    queryParams.push(`search=${encodeURIComponent(search.trim())}`);
  }

  if (category) {
    queryParams.push(`category=${encodeURIComponent(category)}`);
  }

  const queryString = queryParams.join("&");

  const url = `${BASE_URL}/foods${queryString ? `?${queryString}` : ""}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Errore durante il caricamento degli alimenti.");
  }

  const result = await response.json();

  console.log("risposta backend:", result);

// normalizzazione del formato della risposta backend
  return result.data || result.food || result.item || result;
}

// funzione per dettaglio completo
export async function getFoodById(id) {


  const response = await fetch(`${BASE_URL}/foods/${id}`);

  if (!response.ok) {
    throw new Error("Alimento non trovato.");
  }

  const result  = await response.json();

  console.log("risposta backend:", result);

  return result.data || result.food || result.item || result;
  
}

