export default function Navbar({ view, setView, canGoBack, onBack, meta }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand" onClick={() => setView('home')}>
          <span className="brand-mark">🗺️</span>
          <span>LinguaLeap</span>
        </div>

        <div className="navbar-stats">
          <span className="stat-pill streak-pill" title="Daily streak">
            🔥 {meta?.streak || 0}
          </span>
          <span className="stat-pill xp-pill" title="Experience points">
            ✦ {meta?.xp || 0} XP
          </span>
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