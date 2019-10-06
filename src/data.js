const NUMBER_OF_CARD = 5;

const names = [`Ivan`, `Petr`, `Oleg`, `Dmitriy`, `Alexander`];
const phones = [`89853332211`, `89034234300`, `+79301234567`, `89109019234`];

const getRandomElement = (element) => element[Math.floor(Math.random() * element.length)];
const getDataList = (count) => new Array(count).fill(``).map(createCardData);

const createCardData = () => ({
  name: getRandomElement(names),
  phone: getRandomElement(phones),
});

export const dataList = getDataList(NUMBER_OF_CARD);
