const getRandomIntInterval = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const changeStatusCell = (cell, siblings) => {
  let countLives = siblings.filter(f => f === 1).length

  if (cell === 1 && countLives < 2) {
    return 0
  }
  if (cell === 1 && (countLives === 2 || countLives === 3)) {
    return 1
  }
  if (cell === 1 && countLives > 3) {
    return 0
  }
  if (cell === 0 && countLives === 3) {
    return 0
  }
  return cell
}

const checkEveryCell = (array, height, width) => {
  for (let i = 0; i <= height; i++) {
    for (let j = 0; j <= width; j++) {
      if (i === 0 && j === 0) { // position top-left
        const siblings = [array[i, j + 1], array[i + 1, j + 1], array[i + 1, j]]
        array[i][j] = changeStatusCell(array[i][j], siblings)
      } else if (i === 0 && j > 0 && j < width) { // position top
        const siblings = [array[i, j - 1], array[i + 1, j - 1], array[i + 1, j], array[i + 1, j + 1], array[i, j + 1]]
        array[i][j] = changeStatusCell(array[i][j], siblings)
      } else if (i === 0 && j > width) { // position top-right
        const siblings = [array[i, j - 1], array[i + 1, j - 1], array[i + 1, j]]
        array[i][j] = changeStatusCell(array[i][j], siblings)
      } else if (i > 0 && i < height && j === width) { // position right
        const siblings = [array[i - 1, j], array[i - 1, j - 1], array[i, j - 1], array[i + 1, j + 1], array[i + 1, j]]
        array[i][j] = changeStatusCell(array[i][j], siblings)
      } else if (i === height && j === width) { // position right-bottom
        const siblings = [array[i - 1, j], array[i - 1, j - 1], array[i, j - 1]]
        array[i][j] = changeStatusCell(array[i][j], siblings)
      } else if (i === height && j > 0 && j < width) { // position bottom
        const siblings = [array[i, j - 1], array[i - 1, j - 1], array[i - 1, j], array[i - 1, j + 1], array[i, j + 1]]
        array[i][j] = changeStatusCell(array[i][j], siblings)
      } else if (i === height && j === 0) { // position left-bottom
        const siblings = [array[i - 1, j], array[i - 1, j + 1], array[i, j + 1]]
        array[i][j] = changeStatusCell(array[i][j], siblings)
      } else if (i > 0 && i < height && j === 0) { // position left
        const siblings = [array[i - 1, j], array[i - 1, j + 1], array[i, j + 1], array[i + 1, j + 1], array[i + 1, j]]
        array[i][j] = changeStatusCell(array[i][j], siblings)
      } else { // position somewhere in the center
        const siblings = [array[i - 1, j + 1], array[i, j + 1], array[i + 1, j + 1], array[i + 1, j], array[i + 1, j - 1], array[i, j - 1], array[i - 1, j - 1], array[i - 1, j]]
        array[i][j] = changeStatusCell(array[i][j], siblings)
      }
    }
  }
}

const n = getRandomIntInterval(3, 9), m = getRandomIntInterval(3, 9)
const desk = []

for (let i = 0; i <= n; i++) {
  const line = []
  for (let j = 0; j <= m; j++) {
    line.push(getRandomIntInterval(0, 1))
  }
  desk.push(line)
}
console.log(desk)
// setInterval(() => {
//   checkEveryCell(desk, n, m)
//   console.log(desk)
// }, 1000)


