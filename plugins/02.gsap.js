import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

const registerEffects = () => {
  gsap.registerEffect({
    name: 'aosFadeIn',
    effect: (targets, config = {}) => {
      const {
        duration = 1,
        delay = 0,
        markers = false,
        once = false,
        start = 'top 90%',
        verticalDistance = 32,
        horizontalDistance = 32
      } = config

      const getNumber = (value, fallback) => {
        const parsedValue = Number.parseFloat(value)
        return Number.isFinite(parsedValue) ? parsedValue : fallback
      }

      const animations = []

      gsap.utils.toArray(targets).forEach((target, index) => {
        const distance = getNumber(
          target.dataset.fadeDistance,
          target.dataset.fade === 'up' ? verticalDistance : horizontalDistance
        )
        const directions = {
          up: { from: { y: distance }, to: { y: 0 } },
          left: { from: { x: -distance }, to: { x: 0 } },
          right: { from: { x: distance }, to: { x: 0 } }
        }
        const directionName = target.dataset.fade
        const direction = directions[directionName]
        if (!direction) return

        const { from, to } = direction
        const fadeItems = target.querySelectorAll('[data-fade-item]')
        const animationTargets = fadeItems.length ? fadeItems : target
        const stagger = fadeItems.length
          ? getNumber(target.dataset.fadeStagger, 0)
          : 0
        const targetDuration = getNumber(target.dataset.fadeDuration, duration)
        const targetDelay = getNumber(target.dataset.fadeDelay, delay)
        const targetOnce = target.dataset.fadeOnce == null
          ? once
          : target.dataset.fadeOnce !== 'false'
        const triggerId = target.dataset.fadeId || target.id || index

        const animation = gsap.fromTo(animationTargets, {
          autoAlpha: 0,
          ...from
        }, {
          autoAlpha: 1,
          ...to,
          duration: targetDuration,
          delay: targetDelay,
          ease: 'power2.out',
          stagger,
          scrollTrigger: {
            id: `aosFadeIn:${triggerId}:${directionName}`,
            trigger: target,
            start: target.dataset.fadeStart || start,
            once: targetOnce,
            markers,
            toggleActions: targetOnce ? 'play none none none' : 'play none none reverse'
          }
        })

        animations.push(animation)
      })

      return animations
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
