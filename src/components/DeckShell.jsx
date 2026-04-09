import { useNavigate } from 'react-router-dom'
import './DeckShell.css'

export default function DeckShell({ title, children }) {
  const navigate = useNavigate()

  return (
    <div className="deck-shell">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Master Deck
      </button>
      <div className="slides-container">
        {children}
      </div>
    </div>
  )
}
