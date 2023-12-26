export function contentAnimation({parent}) {
  const parentEl = document.querySelector(parent)
  const sidebar = parentEl.querySelector('.sidebar')
  const cards = gsap.utils.toArray('.card')
  const overlayToggle = parentEl.querySelector('.overaly-toggle')
  console.log(overlayToggle);
}