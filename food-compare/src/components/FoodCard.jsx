import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton.jsx"
import CompareButton from "./CompareButton.jsx";

function FoodCard({ food }){
    return (
            <article className="card card-food h-100">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
          <div>
            <h2 className="h5 card-title mb-1">{food.title}</h2>
            <span className="badge badge-category">{food.category}</span>
          </div>
          {food.calories && <span className="small text-muted">{food.calories} kcal</span>}
        </div>

        <p className="card-text text-muted flex-grow-1">
          Consulta la scheda completa per valori nutrizionali, origine e benefici.
        </p>

        <div className="d-flex flex-wrap gap-2">
          <Link className="btn btn-outline-dark" to={`/foods/${food.id}`}>
            Dettagli
          </Link>
          <CompareButton food={food} />
          <FavoriteButton food={food} />
        </div>
      </div>
    </article>
    )
}

export default FoodCard