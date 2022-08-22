const animation = lottie

animation.loadAnimation({
  container: document.querySelector('#bm'),
  rendere: 'svg',
  loop: true,
  autoplay: true,
  path: './data.json'
})