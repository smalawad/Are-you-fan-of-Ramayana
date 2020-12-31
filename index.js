const chalk = require('chalk');

var readline = require('readline-sync');
var score = 0;

console.log(chalk.cyan(" How well you know Ramayana! \n Here is a simple quiz. \n\n Point System: \n ===============\n For each right answer you will score: \t1 - point. \n For wrong answer you score: \t\t\t0 - point.\n"));
console.log("==========================");

var askUserName = chalk.red("What is your Name? ");
var userName = readline.question(askUserName);

console.log(chalk.yellow("Welcome " + userName.toUpperCase() + " ! \n"));

var topScorer = {
  name: "Malawad",
  score: 16
}
function play (question, answer) {
  var userAnswer = readline.question(chalk.bgRed(question));

  if(userAnswer.toUpperCase() == answer.toUpperCase()) 
  {
    console.log(chalk.yellow("You are right!\nCongrats..!\n"));
    console.log(chalk.green("You scored 1 - point\n"));
    score++;
  }
  else 
  {
    console.log(chalk.red("You are wrong!\n"));
  }
  console.log("=======================");
}

var questions = [ 
  { 
    question: "Who composed/wrote Ramayana ?\n",
    answer: "Valmiki"
  },
  {
    question: "Who is Ram's father ?\n",
    answer: "Dasharatha"
  },
  {
    question: "Who is Ram's mother?\n",
    answer: "Kaushalya"
  },
  {
    question: "Who is Bharats' mother?\n",
    answer: "Kaikeyi"
  },
  {
    question: "Who is Lakshmana and Satrughna's mother ?\n",
    answer: "Sumithra"
  },
  {
    question: "Which ancient practice did sita  choose to select her husband?\n",
    answer: "swayamvara"
  },
  {
    question: "What is capital of lord Ram's kingdom ?\n",
    answer: "Ayodhya"
  },
  {
    question: "How many years Ram was exiled ?\n",
    answer: "14"
  },
  {
    question: "Who is king of monkey's kingdom? \n",
    answer: "Sugriva"
  },
  {
    question: "Who is demon king in ramayana ?\n",
    answer: "Ravana"
  },
  {
    question: "What is Ravana's kingdom ?\n",
    answer: "lanka"
  },
  {
    question: "How many heads does ravana had?\n",
    answer: "10"
  },
  {
    question: "Who become golden deer?\n",
    answer: "Maricha"
  },
  {
    question: "Who flies to Himalaya to Get Magic Medicine?\n",
    answer: "Hanuman"
  },
  {
    question: "Who rescued Sita? \n",
    answer: "Hanuman"
  },
  {
    question: "Who killed Ravana? \n",
    answer: "Ram"
  }
]

console.log(chalk.green("Lets PLAY.......!\n"));
console.log("=====================");
for (var questionNumber = 0; questionNumber < questions.length; questionNumber++)
{
  play(questions[questionNumber].question, questions[questionNumber].answer);
  console.log("\n");
}

console.log(chalk.blue(userName.toUpperCase() + " Thanks for playing! "));
console.log(chalk.cyan("HEY! Your score is: ", score));

if(topScorer.score > score)
{
  console.log(chalk.yellow(topScorer.name + " is Top scorer..!"));
  console.log(chalk.green("His score is: ", topScorer.score));
}
else
{
  console.log(chalk.cyan(userName + " , HEY congrats! you are Top scorer\n"));
}

console.log("\n");
console.log(chalk.yellow("DON'T FORGET TO POST YOUR SCORE.\n"));
console.log(chalk.cyan("Have a nice day!"));
console.log("=====================");