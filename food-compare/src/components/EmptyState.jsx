//// funzione che mostra un messaggio quando non ci sono risultati da visualizzare

function EmptyState({ title, text, children }) {
  return (
    <div className="empty-state text-center p-5 my-4">
      <i className="bi bi-search display-5 text-secondary"></i>
      <h2 className="h4 mt-3">{title}</h2>
      <p className="text-muted mb-3">{text}</p>
      {children}
    </div>
  );
}

export default EmptyState;
