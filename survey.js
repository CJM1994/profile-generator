const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generateQuestion = function (callback) {
  rl.question("What's your name? Nicknames are also acceptable!: ", (name) => {
    console.log(`My name is ${name}`);
    rl.question("What's an activity you like doing?: ", (activity) => {
      console.log(`and I like ${activity}!`);
      rl.question('What kind of pet do you have?: ', (pet) => {
        console.log('and I have a dog');
        rl.close();
      })
    })
  });
}
generateQuestion();

// This is meant to be an example of callback hell