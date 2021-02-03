import {
  addElement,
  removeElement,
  replaceElement
} from '../helpers/arrayUtils.js'
class FootballBoard {
  constructor(results = []) {
    this.data = results
  }

  get results() {
    return this.data
  }

  addGame(homeTeam, awayTeam) {
    if (!homeTeam || !awayTeam) return

    this.data = addElement(this.data, {
      home: homeTeam,
      away: awayTeam,
      score: [0, 0]
    })
  }

  finishGame(index) {
    this.data = removeElement(this.data, index - 1)
  }

  updateScore(index, homeScore, awayScore) {
    const match = this.data[index - 1]
    this.data = replaceElement(this.data, index - 1, {
      ...match,
      score: [+homeScore, +awayScore]
    })
  }

  toString() {
    return this.data
      .map(
        (o, idx) =>
          idx +
          1 +
          ': ' +
          o.home +
          ' - ' +
          o.away +
          ': ' +
          o.score[0] +
          ' - ' +
          o.score[1]
      )
      .join('\n')
  }

  summary(board = this.data) {
    console.log(toString(board))
  }

  summaryByTotalScore() {
    let board = [...this.data].reverse().sort(function (a, b) {
      let x = sumElements(a.score)
      let y = sumElements(b.score)
      return x > y ? -1 : x < y ? 1 : 0
    })
    this.summary(board)
  }
}

export default FootballBoard
