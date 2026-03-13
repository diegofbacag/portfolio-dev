import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          } else {
            entry.target.classList.remove('animate') // removes so it re-triggers
          }
        })
      },
      { threshold: 0.15 },
    )

    const sections = document.querySelectorAll('.scroll-section')
    sections.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
