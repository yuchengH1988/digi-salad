import projectImage from '~/assets/images/showcase-project.webp'

const description = 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.'

// Replace the placeholder entries as additional project content becomes available.
export const showcaseSlides = Array.from({ length: 4 }, (_, index) => ({
  id: `lp-club-${index + 1}`,
  eyebrow: 'Highlighted showcase',
  title: 'LP Club Mobile App',
  description,
  image: projectImage,
  imageAlt: 'LP Club mobile app project',
  href: ''
}))
