const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "- What's your name? Nicknames are also acceptable :)   ",
  "- What's an activity you like doing?   ",
  "- What do you listen to while doing that?   ",
  "- Which meal is your favourite (eg: dinner, brunch, etc.)   ",
  "- What's your favourite thing to eat for that meal?   ",
  "- Which sport is your absolute favourite?   ",
  "- What is your superpower? In a few words, tell us what you are amazing at!   ",
];

const answers = [];
let currentQuestion = 0;

const askQuestion = () => {
  rl.question(questions[currentQuestion], (answer) => {
    answers.push(answer);
    currentQuestion += 1;

    if (currentQuestion < questions.length) {
      askQuestion();
    } else {
      console.log("\nSurvey complete. Here are your answers:\n");
      answers.forEach((answer, index) => {
        console.log(`${questions[index]} ----- ${answer}`);
      });
      rl.close();
    }
  });
};

askQuestion();