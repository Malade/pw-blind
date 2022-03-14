const passEl = document.querySelector('.pass')
const blindEl = document.querySelector('.blind')

console.log('js link test')

passEl.addEventListener('focus', function() {
  blindEl.classList.remove('noShow')
})

passEl.addEventListener('blur', () => {
  blindEl.classList.add('noShow')
})