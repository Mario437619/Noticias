import { useEffect } from 'react'

function useScrollReveal(dependency) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const timer = setTimeout(() => {
      const elementos = document.querySelectorAll('.reveal')
      elementos.forEach((el) => observer.observe(el))
    }, 300)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [dependency])
}

export default useScrollReveal