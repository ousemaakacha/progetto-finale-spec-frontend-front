import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFoodById } from "../api/foods.js";

function DetailPage(){
    const { id } = useParams();
    const [food, setFoods] = useState(null);
    const [error, setError] = useState("");

    // caricamento dettaglio cibo tramite id 
    useEffect(() => {
        async function loadFood() {
        try {
            const data = await getFoodById(id);
            setFood(data);
        } catch (err) {
            setError(err.message);
        } 
        }

        loadFood();

    }, [id]);

    // rendering condizionale se il cibo non esiste o vi e' un errore di caricamneto
    if (error) {
    return (
      <div className="alert alert-danger">
        {error} <Link to="/" className="alert-link">Torna alla lista</Link>
      </div>
    );}

    if (!food) {
    return (
      <div className="alert alert-warning">
        Nessun alimento trovato
      </div>
    );
    }
}