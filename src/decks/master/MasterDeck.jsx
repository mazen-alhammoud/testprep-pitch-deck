import { useNavigate } from 'react-router-dom'
import Slide from '../../components/Slide'
import './MasterDeck.css'

export default function MasterDeck() {
  const navigate = useNavigate()

  return (
    <div className="master-deck">
      <Slide className="master-landing">
        {/* Mesh grid background */}
        <div className="mesh-bg">
          <div className="mesh-grid" />
          <div className="mesh-glow mesh-glow-primary" />
          <div className="mesh-glow mesh-glow-secondary" />
        </div>

        <div className="landing-content">
          <img
            src="/testpreo-logo.svg"
            alt="Test.Prep"
            className="logo"
          />

          <p className="tagline">Select your pitch deck</p>

          <div className="cta-group">
            <button className="cta cta-principals" onClick={() => navigate('/principals')}>
              <span className="cta-icon">👔</span>
              <span className="cta-label">For Principals</span>
              <span className="cta-arrow">→</span>
            </button>
            <button className="cta cta-families" onClick={() => navigate('/families')}>
              <span className="cta-icon">👨‍👩‍👧</span>
              <span className="cta-label">For Families</span>
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>
      </Slide>
    </div>
  )
}
