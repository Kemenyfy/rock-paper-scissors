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

let playerOneChoice;
const playerOneRockSelected = () => {
  console.log('player one rock button was clicked')
  playerOneChoice = 'rock'
  compareChoice()
}

const playerOnePaperSelected = () => {
  console.log('player one paper button was clicked')
  playerOneChoice = 'paper'
  compareChoice()
}

const playerOneScissorsSelected = () => {
  console.log('player one scissors button was clicked')
  playerOneChoice = 'scissors'
  compareChoice()
}

let playerTwoChoice;
const playerTwoRockSelected = () => {
  console.log('player two rock button was clicked')
  playerTwoChoice = 'rock'
  compareChoice()
}

const playerTwoPaperSelected = () => {
  console.log('player two paper button was clicked')
  playerTwoChoice = 'paper'
  compareChoice()
}

const playerTwoScissorsSelected = () => {
  console.log('player two scissors button was clicked')
  playerTwoChoice = 'scissors'
  compareChoice()
}

const compareChoice = () => {
  if (playerOneChoice == 'rock' && playerTwoChoice == 'rock') {
    console.log("tie")
    const newLi = document.createElement('li')
      newLi.textContent = 'Tie!!!'
      const parent = document.querySelector('#player-wins')
      parent.textContent = ''
      parent.appendChild(newLi)
  } if (playerOneChoice == 'rock' && playerTwoChoice == 'paper') {
      console.log('player two wins')
      const newLi = document.createElement('li')
        newLi.textContent = 'Player Two Wins!!!'
        const parent = document.querySelector('#player-wins')
        parent.textContent = ''
        parent.appendChild(newLi)
    } if (playerOneChoice == 'rock' && playerTwoChoice == 'scissors') {
        console.log('player one wins')
          const newLi = document.createElement('li')
          newLi.textContent = 'Player One Wins!!!'
          const parent = document.querySelector('#player-wins')
          parent.textContent = ''
          parent.appendChild(newLi)
      } if (playerOneChoice == 'paper' && playerTwoChoice == 'rock') {
          console.log('player one wins')
          const newLi = document.createElement('li')
            newLi.textContent = 'Player One Wins!!!'
            const parent = document.querySelector('#player-wins')
            parent.textContent = ''
            parent.appendChild(newLi)
        } if (playerOneChoice == 'paper' && playerTwoChoice == 'paper') {
            console.log('tie')
            const newLi = document.createElement('li')
              newLi.textContent = 'Tie!!!'
              const parent = document.querySelector('#player-wins')
              parent.textContent = ''
              parent.appendChild(newLi)
          } if (playerOneChoice == 'paper' && playerTwoChoice == 'scissors') {
              console.log('player two wins')
              const newLi = document.createElement('li')
                 newLi.textContent = 'Player Two Wins!!!'
                 const parent = document.querySelector('#player-wins')
                 parent.textContent = ''
                 parent.appendChild(newLi)
            } if (playerOneChoice == 'scissors' && playerTwoChoice == 'rock') {
                console.log('player two wins')
                const newLi = document.createElement('li')
                  newLi.textContent = 'Player Two Wins!!!'
                  const parent = document.querySelector('#player-wins')
                  parent.textContent = ''
                  parent.appendChild(newLi)
              } if (playerOneChoice == 'scissors' && playerTwoChoice == 'paper') {
                  console.log('player one wins')
                  const newLi = document.createElement('li')
                    newLi.textContent = 'Player One Wins!!!'
                    const parent = document.querySelector('#player-wins')
                    parent.textContent = ''
                    parent.appendChild(newLi)
                } if (playerOneChoice == 'scissors' && playerTwoChoice == 'scissors') {
                    console.log('tie')
                    const newLi = document.createElement('li')
                      newLi.textContent = 'Tie!!!'
                      const parent = document.querySelector('#player-wins')
                      parent.textContent = ''
                      parent.appendChild(newLi)
                  }
}

document.querySelector('.change-p1-button').addEventListener('click', updatePlayerOneName)
document.querySelector('.change-p2-button').addEventListener('click', updatePlayerTwoName)
document.querySelector('.p1-rock-button').addEventListener('click', playerOneRockSelected)
document.querySelector('.p1-paper-button').addEventListener('click', playerOnePaperSelected)
document.querySelector('.p1-scissors-button').addEventListener('click', playerOneScissorsSelected)
document.querySelector('.p2-rock-button').addEventListener('click', playerTwoRockSelected)
document.querySelector('.p2-paper-button').addEventListener('click', playerTwoPaperSelected)
document.querySelector('.p2-scissors-button').addEventListener('click', playerTwoScissorsSelected)