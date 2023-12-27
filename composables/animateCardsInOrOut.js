export function animateCardsInOrOut(overlayToggle, sidebar, cards, container, bool)  {

  gsap.to(overlayToggle, {
    right: bool ? '-500px' : '0px',
    duration: 1,
    ease: "power4.out"
  })

  gsap.to(sidebar, {
    right: bool ? '0%' : '-110%',
    stagger: 0.075,
    duration: 1,
    ease: "power4.out",
  })

  gsap.to(cards, {
    right: bool ? '0%' : '-110%',
    stagger: 0.075,
    duration: 1,
    ease: "power4.out"
  }, "<")

  gsap.to(container, {
    filter: bool ? 'blur(15px)' : 'blur(0)',
    duration: 1,
    immediateRender: false
  }, "<")
  
}
