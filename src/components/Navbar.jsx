export default function Navbar({ view, setView, canGoBack, onBack }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand" onClick={() => setView('home')}>
          <span className="brand-mark">🗣️</span>
          <span>LinguaLeap</span>
        </div>
        <nav className="nav-links">
          {canGoBack && (
            <button className="nav-btn ghost" onClick={onBack}>
              ← Back
            </button>
          )}
          <button
            className={`nav-btn ${view === 'dashboard' ? 'active' : ''}`}
            onClick={() => setView('dashboard')}
          >
            Dashboard
          </button>
        </nav>
      </div>
    </header>
  )
}
