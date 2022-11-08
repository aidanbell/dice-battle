/*----- app's state (variables) -----*/
let user = {
  roll: null,
  wins: 0
}

let comp = {
  roll: null,
  wins: 0
}

/*----- cached element references -----*/
let rollBtnEl = document.querySelector('button')
let userResultEl = document.querySelector('#user > h2')
let compResultEl = document.querySelector('#computer > h2')
let userWinsEl = document.getElementById('user-wins')
let compWinsEl = document.getElementById('computer-wins')

/*----- event listeners -----*/
rollBtnEl.addEventListener('click', handleRoll)

/*----- functions -----*/
function handleRoll() {
  console.log("Rolling the dice")
  userResultEl.classList.remove('winner')
  compResultEl.classList.remove("winner");
  user.roll = rollDice()
  comp.roll = rollDice()
  if (user.roll > comp.roll) {
    user.wins++
    userResultEl.classList.add('winner')
  } else if (comp.roll > user.roll) {
    comp.wins++
    compResultEl.classList.add('winner')
  }
  render()
}

function rollDice() {
  return Math.floor(Math.random() * 6 + 1)
}

function render() {
  userResultEl.textContent = user.roll
  compResultEl.textContent = comp.roll
  userWinsEl.textContent = `Wins: ${user.wins}`
  compWinsEl.textContent = `Wins: ${comp.wins}`;
}