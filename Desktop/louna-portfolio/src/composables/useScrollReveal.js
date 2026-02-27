import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  onMounted(() => {
    // Small delay to let page transition finish before observing
    setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.1 }
      )

      document.querySelectorAll('.fade-in, .draw-line, .draw-line-short').forEach((el) => {
        observer.observe(el)
      })
    }, 600)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
