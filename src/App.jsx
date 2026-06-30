import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { categories } from './data/lessonData'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Flashcards from './components/Flashcards'
import Quiz from './components/Quiz'
import Dashboard from './components/Dashboard'
import './App.css'

const initialProgress = { es: { wordsLearned: [], quizzes: [] }, fr: { wordsLearned: [], quizzes: [] }, de: { wordsLearned: [], quizzes: [] } }

export default function App() {
  const [progress, setProgress] = useLocalStorage('linguaLeap.progress', initialProgress)
  const [view, setView] = useState('home')
  const [selected, setSelected] = useState({ languageId: null, categoryId: null })

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
  }

  const canGoBack = view !== 'home'

  return (
    <div className="app-shell">
      <Navbar view={view} setView={setView} canGoBack={canGoBack} onBack={goHome} />

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

      {view === 'dashboard' && <Dashboard progress={progress} />}
    </div>
  )
}
