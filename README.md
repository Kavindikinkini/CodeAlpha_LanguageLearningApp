# CodeAlpha_LanguageLearningApp

An interactive language learning web app built for the CodeAlpha App Development internship (Task 4).

## Features
- Choose from 3 languages (Spanish, French, German) and 3 categories per language (vocabulary, phrases, grammar)
- Flip-card flashcards with translations and pronunciation guides
- Mark words as "learned" to track vocabulary progress
- Multiple-choice quizzes to test recall, with instant feedback
- Progress dashboard showing words learned, quizzes taken, and average quiz score per language
- All progress is saved locally in the browser via `localStorage` — no backend required

## Tech stack
- React 19 + Vite
- Plain CSS (no UI framework)
- Browser `localStorage` for persistence

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in your terminal.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/lessonData.js     # languages, categories, vocabulary/phrases/grammar content
  hooks/useLocalStorage.js
  components/
    Navbar.jsx
    Home.jsx             # language + category selection
    Flashcards.jsx        # flip-card lesson view
    Quiz.jsx              # multiple-choice quiz
    Dashboard.jsx         # progress overview
  App.jsx
  App.css
```

## Author
Built by Kinkini as part of the CodeAlpha App Development internship.
