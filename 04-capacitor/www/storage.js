const { Plugins } = capacitorExports;
const { Storage } = Plugins;


// JSON "set" example
async function initStorage() {
  await Storage.set({
    key: 'cards',
    value: '[]'
  });
}

async function getCardsStorage() {
  const ret = await Storage.get({ key: 'cards' });
  return JSON.parse(ret.value);
}

async function addCardStorage(card) {
  let cards = getCards();
  cards.push(card);

  await Storage.set({
    key: 'cards',
    value: JSON.stringify(cards)
  });
}

async function clearStorage() {
  await Storage.clear();
}