class FootballBoard {
  constructor(results = []) {
    this.results = results
  }

  addGame(homeTeam, awayTeam) {}

  finishGame(index) {}

  updateScore(index, homeScore, awayScore) {}

  toString() {
    return this.results
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

  summary(board = this.results) {
    console.log(toString(board))
  }

  summaryByTotalScore() {}
}

export default FootballBoard
