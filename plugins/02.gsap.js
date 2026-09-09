import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

const registerEffects = () => {
  gsap.registerEffect({
    name: 'aosFadeIn',
    effect: (targets, config = {}) => {
      const {
        duration = 0.6,
        delay = 0,
        markers = false,
        once = false
      } = config

      const directions = {
        up: { from: { y: 32 }, to: { y: 0 } },
        left: { from: { x: -24 }, to: { x: 0 } },
        right: { from: { x: 24 }, to: { x: 0 } }
      }

      gsap.utils.toArray(targets).forEach((target, index) => {
        const direction = directions[target.dataset.fade]
        if (!direction) return

        const { from, to } = direction

        gsap.fromTo(target, {
          autoAlpha: 0,
          ...from
        }, {
          autoAlpha: 1,
          ...to,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            id: `aosFadeIn:${target.dataset.fade}:${index}`,
            trigger: target,
            start: 'top 90%',
            once,
            markers,
            toggleActions: once ? 'play none none none' : 'play none none reverse'
          }
        })
      })
    }
  })
}

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    registerEffects()
  }

  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})
