export function contentAnimation({parent}) {

  const parentEl = document.querySelector(parent)
  const sidebar = document.querySelector('.sidebar')
  const cards = gsap.utils.toArray('.card')
  const overlayToggle = parentEl.querySelector('.overaly-toggle')

  overlayToggle.addEventListener('click', ()=> {
    sidebar.style.pointerEvents = 'all'
    animateCardsInOrOut(overlayToggle, sidebar, cards, parentEl, true)
  })

  cards.forEach(card => {
    card.addEventListener('click', ()=> {
      sidebar.style.pointerEvents = 'none'
      animateCardsInOrOut(overlayToggle, sidebar, cards, parentEl, false)
    })
  });
}