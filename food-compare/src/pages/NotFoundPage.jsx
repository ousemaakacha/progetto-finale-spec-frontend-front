import { Link } from "react-router-dom";

function NotFoundPage(){
    return (
        <div className="text-center py-5">
            <h1 className="display-4">404</h1>
            <p className="lead text-muted">Pagina non trovata</p>
            <Link className="btn btn-success" to="/">Torna alla Home</Link>
        </div>
    );
}

export default NotFoundPage