import { useEffect, useMemo, useState } from "react";
import { getFoods } from "../api/foods.js";
import FoodCard from "../components/FoodCard.jsx";
import EmptyState from "../components/EmptyState.jsx";
import { useDebounce } from "../hooks/useDebounce.js";

function HomePage() {
    const [foods, setFoods] = useState([]);
    const [allFoods, setAllFoods] = useState([]);
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("");
    const [sortBy, setSortBy] = useState("title-asc");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const debouncedSearch = useDebounce(search, 400);

    useEffect(() => {
    async function loadFoods() {
      try {
        setLoading(true);
        setError("");
        const data = await getFoods({ search: debouncedSearch, category });
        setFoods(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadFoods();
  }, [debouncedSearch, category]);


  useEffect(() => {
    async function loadAllFoods() {
        try{
            const data = await getFoods();
            setAllFoods(data);
        } catch (err){
            setError(err.message)
        }
        
    }

    loadAllFoods();
  }, []);


  const categories = useMemo(() => {
  const uniqueCategories = [];

  for (const food of allFoods) {
    if (!uniqueCategories.includes(food.category)) {
      uniqueCategories.push(food.category);
    }
  }

  return uniqueCategories.sort((a, b) => a.localeCompare(b));
}, [allFoods]);


  const sortedFoods = useMemo(() => {
    const sorted = [...foods];

    sorted.sort((a, b) => {
      if (sortBy === "title-asc") return a.title.localeCompare(b.title);
      if (sortBy === "title-desc") return b.title.localeCompare(a.title);
      if (sortBy === "category-asc") return a.category.localeCompare(b.category);
      if (sortBy === "category-desc") return b.category.localeCompare(a.category);
      return 0;
    });

    return sorted;
  }, [foods, sortBy]);


  return (
    <>
      <section className="hero mb-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <p className="text-uppercase fw-bold small mb-2">Comparatore alimentare</p>
            <h1 className="display-5 fw-bold">Confronta alimenti, valori nutrizionali e benefici</h1>
            <p className="lead mb-0">
              Cerca, filtra, salva i preferiti e metti a confronto alimenti diversi in modo semplice.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <i className="bi bi-basket2 display-1 opacity-75"></i>
          </div>
        </div>
      </section>

      <section className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-5">
              <label className="form-label" htmlFor="search">Cerca per titolo</label>
              <input
                id="search"
                className="form-control"
                type="search"
                placeholder="Es. mela, quinoa, salmone..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <div className="col-md-3">
              <label className="form-label" htmlFor="category">Categoria</label>
              <select
                id="category"
                className="form-select"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="">Tutte</option>
                {categories.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label" htmlFor="sortBy">Ordina</label>
              <select
                id="sortBy"
                className="form-select"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="title-asc">Titolo A-Z</option>
                <option value="title-desc">Titolo Z-A</option>
                <option value="category-asc">Categoria A-Z</option>
                <option value="category-desc">Categoria Z-A</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {loading && <p className="text-center py-5">Caricamento alimenti...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && sortedFoods.length === 0 && (
        <EmptyState
          title="Nessun alimento trovato"
          text="Prova a modificare ricerca o categoria selezionata."
        />
      )}

      {!loading && !error && sortedFoods.length > 0 && (
        <div className="row g-4">
          {sortedFoods.map((food) => (
            <div className="col-md-6 col-xl-4" key={food.id}>
              <FoodCard food={food} />
            </div>
          ))}
        </div>
      )}
    </>
  );
  
}

export default HomePage