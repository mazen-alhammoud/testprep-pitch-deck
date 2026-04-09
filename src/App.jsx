import { Routes, Route } from 'react-router-dom'
import MasterDeck from './decks/master/MasterDeck'
import PrincipalsDeck from './decks/principals/PrincipalsDeck'
import FamiliesDeck from './decks/families/FamiliesDeck'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MasterDeck />} />
        <Route path="/principals/*" element={<PrincipalsDeck />} />
        <Route path="/families/*" element={<FamiliesDeck />} />
      </Routes>
    </div>
  )
}

export default App
