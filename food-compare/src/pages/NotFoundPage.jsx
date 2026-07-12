import { Link } from "react-router-dom";

function NotFoundPage(){
    return (
        <div className="text-center py-5">
            <h1>404</h1>
            <p>Pagina non trovata</p>
            <Link to="/">Torna alla Home</Link>
        </div>
    );
}

export default NotFoundPage