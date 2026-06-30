import { languages, content } from '../data/lessonData'

export default function Dashboard({ progress }) {
  return (
    <div className="page">
      <div className="hero">
        <h1>Your progress</h1>
        <p>Track how far you've come in each language.</p>
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
            <div key={lang.id} className="dashboard-card">
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
