const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {
  name: '',
  activity: '',
  pet: ''
};

const askQuestions = function (callback) {
  rl.question("What's your name? Nicknames are also acceptable!: ", (name) => {
    answers.name = name;
    rl.question("What's an activity you like doing?: ", (activity) => {
      answers.activity = activity;
      rl.question('What kind of pet do you have?: ', (pet) => {
        answers.pet = pet;
        rl.close();
        printProfile();
      })
    })
  });
}

const printProfile = function () {
  console.log(`My name is ${answers.name}, and I love ${answers.activity}! I also have a pet ${answers.pet}!`);
}

askQuestions();

// This is meant to be an example of callback hell