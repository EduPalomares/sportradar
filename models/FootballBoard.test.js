import boardDataExample from '../board.example.js'
import FootballBoard from './FootballBoard.js'

let boardEmpty = new FootballBoard()
let boardExample = new FootballBoard(boardDataExample)

describe('toString', () => {
  test('empty Board', () => {
    expect(boardEmpty.toString()).toBe('')
  })

  test('valid FootballBoard', () => {
    expect(boardExample.toString()).toBe(
      '1: Mexico - Canada: 0 - 5\n2: Spain - Brazil: 10 - 2\n3: Germany - France: 2 - 2\n4: Uruguay - Italy: 6 - 6\n5: Argentina - Australia: 3 - 1'
    )
  })
})
