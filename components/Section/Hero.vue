<script setup>
import salad from '~/assets/images/salad.png'

const { $gsap } = useNuxtApp()
const isPageEntered = inject('isPageEntered', ref(true))
const prefersReducedMotion = useReducedMotion()

const heroRef = ref(null)
const animatedLogoRef = ref(null)
const headlineRef = ref(null)
const headlineLineRef = ref(null)
const headlineDotRef = ref(null)
const sideLabelRef = ref(null)
const tasteRef = ref(null)
const saladRef = ref(null)

let heroGsapContext
let entranceTimeline
let stopPageEnteredWatch

const playEntrance = () => {
  if (!entranceTimeline || entranceTimeline.progress() > 0) return
  entranceTimeline.play(0)
}

const rotateSalad = () => {
  if (
    !saladRef.value
    || prefersReducedMotion.value
    || $gsap.isTweening(saladRef.value)
  ) return

  $gsap.to(saladRef.value, {
    rotation: '+=360',
    duration: 0.65,
    ease: 'power2.inOut',
    overwrite: 'auto'
  })
}

onMounted(() => {
  const header = document.querySelector('[data-site-header]')

  if (prefersReducedMotion.value) {
    $gsap.set(header, { autoAlpha: 1, y: 0 })
    return
  }

  heroGsapContext = $gsap.context(() => {
    animatedLogoRef.value.prepareDot([headlineDotRef.value])
    $gsap.set(headlineRef.value, { autoAlpha: 0, y: 36 })
    $gsap.set(sideLabelRef.value, { autoAlpha: 0, x: -28 })
    $gsap.set(tasteRef.value, { autoAlpha: 0, y: 32 })
    $gsap.set(headlineLineRef.value, { scaleX: 0, transformOrigin: 'left center' })
    $gsap.set(header, { autoAlpha: 0, y: -24 })

    entranceTimeline = $gsap.timeline({ paused: true })
      .addLabel('firstStage')
      .to(headlineRef.value, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, 'firstStage')
      .to(sideLabelRef.value, {
        autoAlpha: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, 'firstStage')
      .addLabel('secondStage', 'firstStage+=0.8')
      .to(tasteRef.value, {
        autoAlpha: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out'
      }, 'secondStage')
      .to(header, {
        autoAlpha: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out'
      }, 'secondStage')
      .to(headlineLineRef.value, {
        scaleX: 1,
        duration: 1.2,
        ease: 'power3.inOut'
      }, 'secondStage')
      .to(saladRef.value, {
        rotation: 360,
        duration: 0.65,
        ease: 'power2.inOut'
      }, 'secondStage+=0.65')

    animatedLogoRef.value.addDotBounce(
      entranceTimeline,
      'secondStage+=1.2',
      [headlineDotRef.value]
    )
  }, heroRef.value)

  if (isPageEntered.value) {
    playEntrance()
  } else {
    stopPageEnteredWatch = watch(isPageEntered, (entered) => {
      if (!entered) return
      playEntrance()
      stopPageEnteredWatch?.()
    })
  }
})

onBeforeUnmount(() => {
  stopPageEnteredWatch?.()
  heroGsapContext?.revert()
})
</script>

<template>
  <section id="top" ref="heroRef" class="relative h-[var(--windowVh,100vh)] text-white">
    <div class="absolute inset-0 overflow-hidden rounded-b-[30px] lg:rounded-b-[50px]">
      <BaseYouTubeVideo
        video-id="8_4JRK4QkqU"
        title="digiSalad hero background video"
        background
        :controls="false"
        muted
        loop
        loading="eager"
      />
      <div class="absolute inset-0 bg-[rgba(12,38,34,0.28)]"></div>
    </div>

    <div class="relative h-[var(--windowVh,100vh)]">
      <div class="absolute left-15 top-[17.39%] w-[145px] md:left-24 lg:left-[15.28%] lg:top-[19.26%] lg:w-[199px]">
        <HeroAnimatedLogo ref="animatedLogoRef" class="size-full text-white" />
      </div>

      <div ref="headlineRef" class="absolute left-15 top-[34.06%] md:left-24 lg:left-[15.69%] lg:top-[32.23%]">
        <h1 class="text-h-1 relative z-1">
          We create<br>
          amazing<br>
          digital <span class="block sm:inline-block">experiences</span>
          <span ref="headlineDotRef" class="absolute -right-4 bottom-4 size-[10px] rounded-full bg-coral lg:bottom-5"></span>
        </h1>
        <div ref="headlineLineRef" class="relative z-0 mt-[-20px] h-2 w-[250px] max-w-full bg-accent sm:w-[410px] lg:mt-[-25px] lg:w-[571px]"></div>
      </div>

      <div ref="sideLabelRef" class="absolute left-4 top-[35.5%] flex h-[386px] w-6 flex-col items-center lg:left-[3.6%]">
        <span class="text-mini-1 origin-center -rotate-90 whitespace-nowrap">Digital agency</span>
        <span class="mt-[109px] h-[113px] w-[2px] bg-white"></span>
      </div>
    </div>

    <div ref="tasteRef" class="absolute bottom-[-86px] left-1/2 flex -translate-x-1/2 flex-col items-center">
      <button
        ref="saladRef"
        type="button"
        class="size-[65px] rounded-full"
        aria-label="Rotate Taste us now icon"
        @mouseenter="rotateSalad"
        @click="rotateSalad"
      >
        <img :src="salad" alt="" width="130" height="130" class="size-full">
      </button>
      <span class="text-mini-1 mt-3 whitespace-nowrap">Taste us now!</span>
      <span class="mt-3 h-[44px] w-px bg-white"></span>
      <span class="mt-0 h-[86px] w-px bg-ink"></span>
    </div>
  </section>
</template>
