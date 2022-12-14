import React from 'react'
import Header from './components/layout/Header'
import AbsencePage from './pages/absences/AbsencesPage'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AbsencePage />
    </div>
  )
}

export default App
