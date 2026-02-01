import { useState } from 'react'
import confetti from 'canvas-confetti'
import { motion } from 'framer-motion'

export default function Home() {
  const [accepted, setAccepted] = useState(false)
  const [scale, setScale] = useState(1)

  const playYes = () => {
    new Audio('/valentine-proposal/yes.mp3').play()
    confetti({ particleCount: 200, spread: 140 })
    setAccepted(true)
  }

  const dodgeNo = () => {
    setScale(scale + 0.15)
  }

  const shareWhatsApp = () => {
    const text = encodeURIComponent(
      '💖 Nirali said YES! Happy Valentine’s Day 💘'
    )
    window.open(`https://wa.me/?text=${text}`)
  }

  return (
    <div className="container">
      {!accepted ? (
        <motion.div
          className="card"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="cat">😺❤️</div>

          <h1>Ranju will you be my valentine?</h1>

          <div className="buttons">
            <motion.button
              className="yes"
              style={{ scale }}
              onClick={playYes}
            >
              Yes
            </motion.button>

            <motion.button
              className="no"
              onMouseEnter={dodgeNo}
              whileHover={{
                x: Math.random() * 140 - 70,
                y: Math.random() * 100 - 50
              }}
            >
              No
            </motion.button>
          </div>

          <p className="hint">*No seems a bit shy 😈*</p>
        </motion.div>
      ) : (
        <motion.div
          className="result"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>YAY! 🎉💖</h2>
          <img src="/valentine-proposal/yay.gif" />
          <button className="share" onClick={shareWhatsApp}>
            Share on WhatsApp 💬
          </button>
        </motion.div>
      )}
    </div>
  )
}

