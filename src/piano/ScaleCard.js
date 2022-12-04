export default function ScaleCard() {

  const onClick = () => {
  };

  return (
    <div className="card" style={{ "marginBottom": "0.5rem" }}>
      <header className="card-header">
        <p className="card-header-title">Scales</p>
      </header>
      <div className="card-content">
        <div className="content is-large">
          <p>
            <span>C Major</span>
            <img alt="scale"  src="https://www.pianoscales.org/images/C.png" />
          </p>
        </div>
      </div>
      <footer className="card-footer" onClick={onClick}>
        <a href="#/" aria-current="page" className="card-footer-item">Pick a scale</a>
        <a href="https://www.pianoscales.org/major.html" aria-current="page" className="card-footer-item">More Info</a>
      </footer>
    </div>
  );
}
