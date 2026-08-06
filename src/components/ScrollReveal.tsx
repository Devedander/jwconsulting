import { useEffect } from 'react'

const REVEAL_SELECTOR = 'section:not(:first-of-type) > div:first-child > *, [data-reveal-group] > *'

export function ScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observed = new WeakSet<Element>()

    const revealObserver = reducedMotion || !('IntersectionObserver' in window)
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                revealObserver?.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.12 },
        )

    const registerElements = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((element) => {
        if (observed.has(element)) return
        observed.add(element)
        element.classList.add('scroll-reveal')

        const siblings = [...(element.parentElement?.children ?? [])].filter((item) =>
          item.matches(REVEAL_SELECTOR.split(' > ').at(-1) ?? '*'),
        )
        const delay = Math.min(siblings.indexOf(element), 3) * 70
        ;(element as HTMLElement).style.setProperty('--reveal-delay', `${delay}ms`)

        if (revealObserver) revealObserver.observe(element)
        else element.classList.add('is-visible')
      })
    }

    const mutationObserver = new MutationObserver(registerElements)
    const startTimer = window.setTimeout(() => {
      registerElements()
      mutationObserver.observe(document.body, { childList: true, subtree: true })
    }, 1000)

    return () => {
      window.clearTimeout(startTimer)
      mutationObserver.disconnect()
      revealObserver?.disconnect()
    }
  }, [])

  return null
}
