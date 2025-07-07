const cardValues = {
  'A': -1, '2': -1, '3': -1, '4': -1, '5': -1, '6': -1, '7': -1,
  '8': 0, '9': 0,
  '10': +1, 'J': +1, 'Q': +1, 'K': +1
};

let runningCount = 0;

function createCardButtons() {
  const values = Object.keys(cardValues);
  const cardDeck = document.getElementById('card-deck');
  values.forEach(value => {
    const btn = document.createElement('div');
    btn.textContent = value;
    btn.className = 'card';
    btn.addEventListener('click', () => assignCard(value));
    cardDeck.appendChild(btn);
  });
}

function assignCard(value) {
  const targetHand = prompt("Assign to: 'dealer' or 'player'?").toLowerCase();
  const handContainer = document.getElementById(`${targetHand}-hand`);
  if (!handContainer) return alert("Please choose 'dealer' or 'player'.");

  const card = document.createElement('div');
  card.className = 'card';
  card.textContent = value;
  handContainer.appendChild(card);

  runningCount += cardValues[value];
  updateCountDisplay();
}

function updateCountDisplay() {
  document.getElementById('count').textContent = runningCount;
}

function resetHand() {
  document.getElementById('dealer-hand').innerHTML = '';
  document.getElementById('player-hand').innerHTML = '';
}

function resetShoe() {
  resetHand();
  runningCount = 0;
  updateCountDisplay();
}

createCardButtons();
