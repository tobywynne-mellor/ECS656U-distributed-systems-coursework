const express = require('express')
const cors = require('cors')
const compression = require('compression')
const path = require('path')
const PhaserGame = require('./game/game')

const app = express()
const game = new PhaserGame()
const port = 3000

app.use(cors())
app.use(compression())

app.use('/', express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.get('/getState', (req, res) => {
  try {
    let gameScene = game.scene.keys['GameScene']
    return res.json({ state: gameScene.getState() })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

app.listen(port, () => {
  console.log('Express is listening on http://localhost:' + port)
})