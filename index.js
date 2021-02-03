import readline from 'readline'
import FootballBoard from './models/FootballBoard.js'
import boardExample from './board.example.js'

let board = new FootballBoard(boardExample)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `\nMenu:\n
1. Start Game
2. Finish Game
3. Update Score
4. Summary by Total Score
5. Summary
  
Enter Option > `
})

rl.on('line', (option) => {
  clear()

  switch (option.trim()) {
    case '1':
      rl.question(`\nHome Team: `, (home) => {
        clear()
        rl.question(`Away Team: `, (away) => {
          console.clear()
          clear()

          board.addGame(home, away)
          start()
        })
      })

      break
    case '2':
      rl.question('\nIndex of the Match: ', (index) => {
        board.finishGame(index)
        start()
      })
      break

    case '3':
      rl.question('\nIndex of the Match: ', (index) => {
        clear()
        rl.question(`\nHome Score: `, (home) => {
          clear()
          rl.question(`Away Score: `, (away) => {
            console.clear()
            clear()

            board.updateScore(index, home, away)
            start()
          })
        })
      })
      break
    case '4':
      console.clear()
      clear()
      board.summaryByTotalScore()
      rl.prompt()
      break
    case '5':
      console.clear()
      clear()
      board.summary()
      rl.prompt()
      break
    default:
      rl.close()
  }
})

rl.on('close', function () {
  console.clear()
  console.log('\nBYE BYE !!!\n')
  process.exit(0)
})

function start() {
  console.clear()
  board.summary()
  rl.prompt()
}

function clear() {
  readline.moveCursor(process.stdout, 0, -1)
}

start()
