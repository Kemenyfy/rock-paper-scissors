const updatePlayerOneName = () => {
  console.log('updating player one name')
  const playerName = document.querySelector('.p1-name-input').value
  document.querySelector('#playerOneName').textContent = playerName
}

const updatePlayerTwoName = () => {
  console.log('updating player one name')
  const playerName = document.querySelector('.p2-name-input').value
  document.querySelector('#playerTwoName').textContent = playerName
}

const playerOneRockSelected = () => {
  console.log('player one rock button was clicked')
  const playerOneChoice = 'rock'
}

const playerOnePaperSelected = () => {
  console.log('player one paper button was clicked')
  const playerOneChoice = 'paper'
}

const playerOneScissorsSelected = () => {
  console.log('player one scissors button was clicked')
  const playerOneChoice = 'scissors'
}

const playerTwoRockSelected = () => {
  console.log('player two rock button was clicked')
  const playerTwoChoice = 'rock'
}

const playerTwoPaperSelected = () => {
  console.log('player two paper button was clicked')
  const playerTwoChoice = 'paper'
}

const playerTwoScissorsSelected = () => {
  console.log('player two scissors button was clicked')
  const playerTwoChoice = 'scissors'
}




document.querySelector('.change-p1-button').addEventListener('click', updatePlayerOneName)
document.querySelector('.change-p2-button').addEventListener('click', updatePlayerTwoName)
document.querySelector('.p1-rock-button').addEventListener('click', playerOneRockSelected)
document.querySelector('.p1-paper-button').addEventListener('click', playerOnePaperSelected)
document.querySelector('.p1-scissors-button').addEventListener('click', playerOneScissorsSelected)
document.querySelector('.p2-rock-button').addEventListener('click', playerTwoRockSelected)
document.querySelector('.p2-paper-button').addEventListener('click', playerTwoPaperSelected)
document.querySelector('.p2-scissors-button').addEventListener('click', playerTwoScissorsSelected)