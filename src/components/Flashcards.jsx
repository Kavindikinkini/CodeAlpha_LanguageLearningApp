import { useState } from 'react'
import { content, categories, languages } from '../data/lessonData'

export default function Flashcards({ languageId, categoryId, progress, toggleLearned, goToQuiz }) {
  const items = content[languageId][categoryId]
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const item = items[index]
  const lang = languages.find((l) => l.id === languageId)
  const category = categories.find((c) => c.id === categoryId)
  const learnedSet = new Set(progress[languageId]?.wordsLearned || [])
  const isLearned = learnedSet.has(item.id)

  function next() {
    setFlipped(false)
    setIndex((i) => (i + 1) % items.length)
  }

  function prev() {
    setFlipped(false)
    setIndex((i) => (i - 1 + items.length) % items.length)
  }

  return (
    <div className="page">
      <div className="lesson-head">
        <h2>{lang.flag} {lang.name} · {category.name}</h2>
        <p className="muted">Card {index + 1} of {items.length}</p>
      </div>

      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped((f) => !f)}>
        <div className="flashcard-inner">
          <div className="flashcard-face flashcard-front">
            <p className="card-label">Term</p>
            <h3>{item.term}</h3>
            <p className="english-hint">{item.translation}</p>
            <p className="muted small">Tap for pronunciation</p>
          </div>
          <div className="flashcard-face flashcard-back">
            <p className="card-label">English</p>
            <h3>{item.translation}</h3>
            <p className="muted small">Pronunciation: {item.pronunciation}</p>
          </div>
        </div>
      </div>

      <div className="flashcard-controls">
        <button className="nav-btn" onClick={prev}>Previous</button>
        <button
          className={`nav-btn ${isLearned ? 'active' : ''}`}
          onClick={() => toggleLearned(languageId, item.id)}
        >
          {isLearned ? '✓ Learned' : 'Mark as learned'}
        </button>
        <button className="nav-btn" onClick={next}>Next</button>
      </div>

      <div className="lesson-foot">
        <button className="nav-btn primary" onClick={() => goToQuiz(languageId, categoryId)}>
          Take a quiz on this category →
        </button>
      </div>
    </div>
  )
}
