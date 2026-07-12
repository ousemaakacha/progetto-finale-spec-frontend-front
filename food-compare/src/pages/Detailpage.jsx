import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFoodById } from "../api/foods.js";
import CompareButton from "../components/CompareButton.jsx";
import FavoriteButton from "../components/FavoriteButton.jsx";

function DetailPage(){
    const { id } = useParams();
    const [food, setFood] = useState(null);
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


    return (
    
        <article className="card border-0 shadow-sm overflow-hidden">
            <div className="card-header bg-success text-white p-4">
                <div className="d-flex flex-wrap justify-content-between align-items-start gap-3">
                    <div>
                        <span className="badge text-bg-light text-success mb-2">{food.category}</span>
                        <h1 className="h2 mb-1">{food.title}</h1>
                        <p className="mb-0 opacity-75">{food.description}</p>
                    </div>
                    <div className="d-flex gap-2 flex-wrap">
                        <CompareButton food={food} />
                        <FavoriteButton food={food} />
                    </div>
                </div>
            </div>

            <div className="card-body p-4">
                <div className="row g-4">
                    <div className="col-md-6 col-xl-3">
                        <div className="p-3 bg-light rounded-4 h-100">
                            <div className="text-muted small">Calorie</div>
                            <div className="fs-4 fw-bold">{food.calories} kcal</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="p-3 bg-light rounded-4 h-100">
                            <div className="text-muted small">Proteine</div>
                            <div className="fs-4 fw-bold">{food.proteins} g</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="p-3 bg-light rounded-4 h-100">
                            <div className="text-muted small">Carboidrati</div>
                            <div className="fs-4 fw-bold">{food.carbohydrates} g</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="p-3 bg-light rounded-4 h-100">
                            <div className="text-muted small">Grassi</div>
                            <div className="fs-4 fw-bold">{food.fats} g</div>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row g-4">
                    <div className="col-lg-6">
                        <h2 className="h5">Informazioni</h2>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0 d-flex justify-content-between">
                                <span>Origine</span><strong>{food.origin}</strong>
                            </li>
                            <li className="list-group-item px-0 d-flex justify-content-between">
                                <span>Porzione media</span><strong>{food.servingSize} g</strong>
                            </li>
                            <li className="list-group-item px-0 d-flex justify-content-between">
                                <span>Ricco di fibre</span><strong>{food.fiberRich ? "Sì" : "No"}</strong>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6">
                        <h2 className="h5">Benefici principali</h2>
                        <p className="mb-0">{food.benefits}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <Link className="btn btn-outline-secondary" to="/">
                        <i className="bi bi-arrow-left me-1"></i>
                        Torna alla lista
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default DetailPage
