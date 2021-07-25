import readlineSync from 'readline-sync';

const showRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const isEven = (number) => number % 2 === 0;

const mapping = {
  yes: true,
  no: false,
  true: 'yes',
  false: 'no',
};

const showingAnswer = (question, answer, userName) => {
  if (isEven(question) === mapping[answer]) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${mapping[isEven(question)]}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const makeQuestionAndShowingAnswer = (userName) => {
  const number = getRandomNumber(1, 20);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  return showingAnswer(number, answer, userName);
};

const playGame = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    if (!makeQuestionAndShowingAnswer(userName)) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

const main = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  showRules();
  playGame(userName);
};

export default main;
