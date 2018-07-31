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

document.querySelector('.change-p1-button').addEventListener('click', updatePlayerOneName)
document.querySelector('.change-p2-button').addEventListener('click', updatePlayerTwoName)