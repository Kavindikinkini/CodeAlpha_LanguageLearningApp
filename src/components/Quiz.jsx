import { useMemo, useState } from 'react'
import { content, categories, languages } from '../data/lessonData'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildQuestions(items) {
  return shuffle(items).map((item) => {
    const distractors = shuffle(items.filter((i) => i.id !== item.id)).slice(0, 3).map((i) => i.translation)
    const options = shuffle([item.translation, ...distractors])
    return { id: item.id, term: item.term, answer: item.translation, options }
  })
}

export default function Quiz({ languageId, categoryId, recordQuizResult, goHome }) {
  const items = content[languageId][categoryId]
  const questions = useMemo(() => buildQuestions(items), [languageId, categoryId])
  const lang = languages.find((l) => l.id === languageId)
  const category = categories.find((c) => c.id === categoryId)

  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const question = questions[qIndex]

  function choose(option) {
    if (selected) return
    setSelected(option)
    const correct = option === question.answer
    if (correct) setScore((s) => s + 1)
  }

  function nextQuestion() {
    if (qIndex + 1 < questions.length) {
      setQIndex((i) => i + 1)
      setSelected(null)
    } else {
      recordQuizResult(languageId, categoryId, score, questions.length)
      setDone(true)
    }
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="page">
        <div className="result-card">
          <h2>Quiz complete</h2>
          <p className="score-big">{score} / {questions.length}</p>
          <p className="muted">{pct}% correct · {lang.flag} {lang.name} · {category.name}</p>
          <button className="nav-btn primary" onClick={goHome}>Back to languages</button>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="lesson-head">
        <h2>{lang.flag} {lang.name} · {category.name} quiz</h2>
        <p className="muted">Question {qIndex + 1} of {questions.length}</p>
      </div>

      <div className="quiz-card">
        <p className="card-label">Translate</p>
        <h3>{question.term}</h3>

        <div className="quiz-options">
          {question.options.map((opt) => {
            let cls = 'quiz-option'
            if (selected) {
              if (opt === question.answer) cls += ' correct'
              else if (opt === selected) cls += ' incorrect'
            }
            return (
              <button key={opt} className={cls} onClick={() => choose(opt)} disabled={!!selected}>
                {opt}
              </button>
            )
          })}
        </div>

        {selected && (
          <button className="nav-btn primary" onClick={nextQuestion}>
            {qIndex + 1 < questions.length ? 'Next question →' : 'See results →'}
          </button>
        )}
      </div>
    </div>
  )
}
