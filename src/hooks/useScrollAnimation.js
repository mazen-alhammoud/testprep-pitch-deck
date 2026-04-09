import { useEffect } from 'react'

export default function useScrollAnimation(containerRef) {
  useEffect(() => {
    const container = containerRef?.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { root: container, threshold: 0.15 }
    )

    const elements = container.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [containerRef])
}
