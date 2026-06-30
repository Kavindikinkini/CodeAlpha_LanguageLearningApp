import { languages, content } from '../data/lessonData'
import { badgeDefs, computeTotals } from '../data/badges'

export default function Dashboard({ progress, meta }) {
  const totals = computeTotals(progress, meta)
  const unlockedBadges = badgeDefs.filter((b) => b.check(totals))

  return (
    <div className="page">
      <div className="hero">
        <h1>Your progress</h1>
        <p>Track how far you've come in each language.</p>
      </div>

      <div className="meta-row">
        <div className="meta-card">
          <p className="meta-value">🔥 {meta?.streak || 0}</p>
          <p className="muted small">Day streak</p>
        </div>
        <div className="meta-card">
          <p className="meta-value">✦ {meta?.xp || 0}</p>
          <p className="muted small">Total XP</p>
        </div>
        <div className="meta-card">
          <p className="meta-value">{unlockedBadges.length}/{badgeDefs.length}</p>
          <p className="muted small">Badges earned</p>
        </div>
      </div>

      <div className="badges-section">
        <p className="card-label section-label">Achievements</p>
        <div className="badge-grid">
          {badgeDefs.map((b) => {
            const unlocked = b.check(totals)
            return (
              <div key={b.id} className={`badge-chip ${unlocked ? 'unlocked' : 'locked'}`} title={b.label}>
                <span className="badge-icon">{b.icon}</span>
                <span className="badge-label">{b.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="dashboard-grid">
        {languages.map((lang) => {
          const data = progress[lang.id] || { wordsLearned: [], quizzes: [] }
          const total = Object.values(content[lang.id]).flat().length
          const learned = data.wordsLearned.length
          const pct = total ? Math.round((learned / total) * 100) : 0
          const quizzes = data.quizzes || []
          const avgScore = quizzes.length
            ? Math.round(
                (quizzes.reduce((sum, q) => sum + q.score / q.total, 0) / quizzes.length) * 100
              )
            : null

          return (
            <div key={lang.id} className="dashboard-card" style={{ '--lang-color': lang.color }}>
              <div className="language-card-head">
                <span className="flag">{lang.flag}</span>
                <h2>{lang.name}</h2>
              </div>

              <div className="stat-row">
                <div className="stat">
                  <p className="stat-value">{learned}/{total}</p>
                  <p className="muted small">Words learned</p>
                </div>
                <div className="stat">
                  <p className="stat-value">{quizzes.length}</p>
                  <p className="muted small">Quizzes taken</p>
                </div>
                <div className="stat">
                  <p className="stat-value">{avgScore !== null ? `${avgScore}%` : '—'}</p>
                  <p className="muted small">Avg. quiz score</p>
                </div>
              </div>

              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
              </div>

              {quizzes.length > 0 && (
                <div className="quiz-history">
                  <p className="card-label">Recent quizzes</p>
                  {quizzes.slice(-4).reverse().map((q, i) => (
                    <div key={i} className="quiz-history-row">
                      <span>{q.category}</span>
                      <span className="muted small">{q.score}/{q.total} · {new Date(q.date).toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}