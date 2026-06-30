import { useState, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { categories } from './data/lessonData'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Flashcards from './components/Flashcards'
import Quiz from './components/Quiz'
import Dashboard from './components/Dashboard'
import './App.css'

const initialProgress = {
  es: { wordsLearned: [], quizzes: [] },
  fr: { wordsLearned: [], quizzes: [] },
  de: { wordsLearned: [], quizzes: [] },
}

const initialMeta = { xp: 0, streak: 0, lastActiveDate: null }

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

function daysBetween(a, b) {
  const msPerDay = 1000 * 60 * 60 * 24
  return Math.round((new Date(b) - new Date(a)) / msPerDay)
}

export default function App() {
  const [progress, setProgress] = useLocalStorage('linguaLeap.progress', initialProgress)
  const [meta, setMeta] = useLocalStorage('linguaLeap.meta', initialMeta)
  const [view, setView] = useState('home')
  const [selected, setSelected] = useState({ languageId: null, categoryId: null })

  // Update the daily streak once per session, based on the last active date.
  useEffect(() => {
    const today = todayKey()
    setMeta((prev) => {
      if (prev.lastActiveDate === today) return prev
      let streak = 1
      if (prev.lastActiveDate) {
        const gap = daysBetween(prev.lastActiveDate, today)
        if (gap === 1) streak = prev.streak + 1
        else if (gap === 0) streak = prev.streak || 1
      }
      return { ...prev, streak, lastActiveDate: today }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function addXp(amount) {
    setMeta((prev) => ({ ...prev, xp: (prev.xp || 0) + amount }))
  }

  function openFlashcards(languageId, categoryId) {
    setSelected({ languageId, categoryId })
    setView('flashcards')
  }

  function openQuiz(languageId, categoryId) {
    setSelected({ languageId, categoryId })
    setView('quiz')
  }

  function goHome() {
    setView('home')
  }

  function toggleLearned(languageId, itemId) {
    setProgress((prev) => {
      const langData = prev[languageId] || { wordsLearned: [], quizzes: [] }
      const has = langData.wordsLearned.includes(itemId)
      const wordsLearned = has
        ? langData.wordsLearned.filter((id) => id !== itemId)
        : [...langData.wordsLearned, itemId]
      if (!has) addXp(5)
      return { ...prev, [languageId]: { ...langData, wordsLearned } }
    })
  }

  function recordQuizResult(languageId, categoryId, score, total) {
    const categoryName = categories.find((c) => c.id === categoryId)?.name || categoryId
    setProgress((prev) => {
      const langData = prev[languageId] || { wordsLearned: [], quizzes: [] }
      const quizzes = [
        ...langData.quizzes,
        { category: categoryName, score, total, date: new Date().toISOString() },
      ]
      return { ...prev, [languageId]: { ...langData, quizzes } }
    })
    addXp(score * 10)
  }

  const canGoBack = view !== 'home'

  return (
    <div className="app-shell">
      <Navbar view={view} setView={setView} canGoBack={canGoBack} onBack={goHome} meta={meta} />

      {view === 'home' && <Home progress={progress} onSelect={openFlashcards} />}

      {view === 'flashcards' && (
        <Flashcards
          languageId={selected.languageId}
          categoryId={selected.categoryId}
          progress={progress}
          toggleLearned={toggleLearned}
          goToQuiz={openQuiz}
        />
      )}

      {view === 'quiz' && (
        <Quiz
          languageId={selected.languageId}
          categoryId={selected.categoryId}
          recordQuizResult={recordQuizResult}
          goHome={goHome}
        />
      )}

      {view === 'dashboard' && <Dashboard progress={progress} meta={meta} />}
    </div>
  )
}