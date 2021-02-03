import boardDataExample from '../board.example.js'
import FootballBoard from './FootballBoard.js'

describe('toString', () => {
  test('empty Board', () => {
    const board = new FootballBoard()
    expect(board.toString()).toBe('')
  })

  test('valid FootballBoard', () => {
    const board = new FootballBoard(boardDataExample)

    expect(board.toString()).toBe(
      '1: Mexico - Canada: 0 - 5\n2: Spain - Brazil: 10 - 2\n3: Germany - France: 2 - 2\n4: Uruguay - Italy: 6 - 6\n5: Argentina - Australia: 3 - 1'
    )
  })
})

describe('addGame', () => {
  test('invalid team names', () => {
    const boardEmpty = new FootballBoard()
    const boardData = new FootballBoard(boardDataExample)
    boardEmpty.addGame('', 't2')
    boardEmpty.addGame('t1', '')
    boardData.addGame('', 't2')
    boardData.addGame('t1', '')
    expect(boardEmpty.results).toStrictEqual(boardEmpty.results)
    expect(boardData.results).toStrictEqual(boardData.results)
  })

  test('valid team names', () => {
    const board = new FootballBoard()
    const expected = [{ home: 't1', away: 't2', score: [0, 0] }]
    board.addGame('t1', 't2')
    expect(board.results).toStrictEqual(expected)
  })
})

describe('finishGame', () => {
  test('empty board', () => {
    const board = new FootballBoard()
    board.finishGame(0)
    expect(board.results).toStrictEqual([])
  })

  test('non empty board', () => {
    const board = new FootballBoard(boardDataExample)
    board.finishGame(1)
    expect(board.results.length).toBe(4)
  })
})
