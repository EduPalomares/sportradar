class FootballBoard {
  constructor(results = []) {
    this.results = results
  }

  addGame(homeTeam, awayTeam) {}

  finishGame(index) {}

  updateScore(index, homeScore, awayScore) {}

  summary(board = this.results) {}

  summaryByTotalScore() {}
}

export default FootballBoard
