import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './DeckShell.css'

export default function DeckShell({ title, children }) {
  const navigate = useNavigate()
  const shellRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useScrollAnimation(shellRef)

  useEffect(() => {
    const el = shellRef.current
    if (!el) return
    const onScroll = () => {
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight)
      setProgress(Math.min(pct * 100, 100))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="deck-shell" ref={shellRef}>
      <div className="slide-progress" style={{ width: `${progress}%` }} />
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Master Deck
      </button>
      <div className="slides-container">
        {children}
      </div>
    </div>
  )
}
