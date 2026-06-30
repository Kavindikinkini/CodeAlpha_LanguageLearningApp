import { useState } from 'react'
import { content, categories, languages } from '../data/lessonData'

function speak(text, locale) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = locale
  utterance.rate = 0.9
  window.speechSynthesis.speak(utterance)
}

export default function Flashcards({ languageId, categoryId, progress, toggleLearned, goToQuiz }) {
  const items = content[languageId][categoryId]
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const item = items[index]
  const lang = languages.find((l) => l.id === languageId)
  const category = categories.find((c) => c.id === categoryId)
  const learnedSet = new Set(progress[languageId]?.wordsLearned || [])
  const isLearned = learnedSet.has(item.id)
  const supportsSpeech = typeof window !== 'undefined' && 'speechSynthesis' in window

  function next() {
    setFlipped(false)
    setIndex((i) => (i + 1) % items.length)
  }

  function prev() {
    setFlipped(false)
    setIndex((i) => (i - 1 + items.length) % items.length)
  }

  function handleSpeak(e) {
    e.stopPropagation()
    speak(item.term, lang.speechLocale)
  }

  return (
    <div className="page" style={{ '--lang-color': lang.color }}>
      <div className="lesson-head">
        <h2>{lang.flag} {lang.name} · {category.name}</h2>
        <p className="muted">Card {index + 1} of {items.length}</p>
      </div>

      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped((f) => !f)}>
        <div className="flashcard-inner">
          <div className="flashcard-face flashcard-front">
            {supportsSpeech && (
              <button className="speak-btn" onClick={handleSpeak} title="Hear pronunciation" aria-label="Hear pronunciation">
                🔊
              </button>
            )}
            <p className="card-label">Term</p>
            <h3>{item.term}</h3>
            <p className="english-hint">{item.translation}</p>
            <p className="muted small">Tap for pronunciation guide</p>
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