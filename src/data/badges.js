// Achievement badges are computed from progress data rather than stored,
// so they always stay in sync with actual stats.

export const badgeDefs = [
  {
    id: 'first-word',
    label: 'First Word',
    icon: '🌱',
    check: (totals) => totals.wordsLearned >= 1,
  },
  {
    id: 'ten-words',
    label: '10 Words Learned',
    icon: '📚',
    check: (totals) => totals.wordsLearned >= 10,
  },
  {
    id: 'twenty-five-words',
    label: '25 Words Learned',
    icon: '🏛️',
    check: (totals) => totals.wordsLearned >= 25,
  },
  {
    id: 'first-quiz',
    label: 'First Quiz',
    icon: '📝',
    check: (totals) => totals.quizzes >= 1,
  },
  {
    id: 'quiz-ace',
    label: 'Perfect Quiz',
    icon: '🎯',
    check: (totals) => totals.perfectQuizzes >= 1,
  },
  {
    id: 'three-day-streak',
    label: '3-Day Streak',
    icon: '🔥',
    check: (totals) => totals.streak >= 3,
  },
  {
    id: 'seven-day-streak',
    label: '7-Day Streak',
    icon: '⚡',
    check: (totals) => totals.streak >= 7,
  },
  {
    id: 'polyglot',
    label: 'Polyglot',
    icon: '🌍',
    check: (totals) => totals.languagesStarted >= 2,
  },
]

export function computeTotals(progress, meta) {
  const languageIds = ['es', 'fr', 'de']
  let wordsLearned = 0
  let quizzes = 0
  let perfectQuizzes = 0
  let languagesStarted = 0

  languageIds.forEach((id) => {
    const data = progress[id] || { wordsLearned: [], quizzes: [] }
    wordsLearned += data.wordsLearned.length
    quizzes += data.quizzes.length
    perfectQuizzes += data.quizzes.filter((q) => q.score === q.total).length
    if (data.wordsLearned.length > 0 || data.quizzes.length > 0) languagesStarted += 1
  })

  return {
    wordsLearned,
    quizzes,
    perfectQuizzes,
    languagesStarted,
    streak: meta.streak || 0,
  }
}