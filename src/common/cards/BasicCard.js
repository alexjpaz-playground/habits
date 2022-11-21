function BasicCard({ title, data }) {
  
    return (
        <div className="card" style={{ "marginBottom": "0.5rem" }}>
            <header className="card-header">
                <p className="card-header-title">{ title }</p>
            </header>
            <div className="card-content">
                <div className="content is-large">
                    <p>{prompt}</p>
                </div>
            </div>
            <footer className="card-footer" onClick={onClick}>
                <a href="#/" aria-current="page" className="card-footer-item">Pick a prompt</a>
            </footer>
        </div>
    )
  }