const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')
const result = document.getElementById('result')
const card = document.getElementById('card')
const sound = document.getElementById('yesSound')

let scale = 1

noBtn.addEventListener('mouseenter', () => {
  const x = Math.random() * 150 - 75
  const y = Math.random() * 120 - 60
  noBtn.style.transform = `translate(${x}px, ${y}px)`

  scale += 0.1
  yesBtn.style.transform = `scale(${scale})`
})

yesBtn.addEventListener('click', () => {
  sound.play()
  confetti({ particleCount: 200, spread: 140 })
  card.style.display = 'none'
  result.style.display = 'block'
})

function shareWhatsApp() {
  const text = encodeURIComponent(
    "💖 Ranju said YES! Happy Valentine’s Day 💘"
  )
  window.open(`https://wa.me/?text=${text}`)
}

