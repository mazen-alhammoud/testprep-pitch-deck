import './Slide.css'

export default function Slide({ children, className = '' }) {
  return (
    <div className={`slide ${className}`}>
      {children}
    </div>
  )
}
