import { languages, categories, content } from '../data/lessonData'

export default function Home({ progress, onSelect }) {
  return (
    <div className="page">
      <div className="hero">
        <h1>Learn a new language, one card at a time</h1>
        <p>Pick a language and a category to start practicing.</p>
      </div>

      <div className="language-grid">
        {languages.map((lang) => {
          const learned = progress[lang.id]?.wordsLearned?.length || 0
          const total = Object.values(content[lang.id]).flat().length
          const pct = total ? Math.round((learned / total) * 100) : 0
          return (
            <div key={lang.id} className="language-card">
              <div className="language-card-head">
                <span className="flag">{lang.flag}</span>
                <h2>{lang.name}</h2>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
              </div>
              <p className="muted small">{learned} / {total} words learned</p>

              <div className="category-list">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className="category-btn"
                    onClick={() => onSelect(lang.id, cat.id)}
                  >
                    <span>{cat.name}</span>
                    <span className="muted small">{cat.description}</span>
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
