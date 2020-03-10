// Paired Programming task with @Alan-Marx and @J-sabharwal

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = [];

rl.question('What\'s your name? Nicknames are also acceptable :)\n', (answer) => {
  profile.push(`My name is ${answer}`);
 
  rl.question('What\'s an activity you like doing?\n', (answer) => {
    profile.push(`An activity I like is ${answer}`);
  
    rl.question('What do you listen to while doing that?\n', (answer) => {
      profile.push(`I like to listen to ${answer} while I engage in this activity`);

      rl.question('What is you favourite meal time? (eg: dinner, brunch, etc.)\n', (answer) => {
        profile.push(`My favourite meal time is ${answer}`);

        rl.question('What\'s your favourite thing to eat for that meal?\n', (answer) => {
          profile.push(`My favourite thing to eat during this meal is ${answer}`);

          rl.question('Which sport is your absolute favourite?\n', (answer) => {
            profile.push(`My favourite sport is ${answer}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', (answer) => {
              profile.push(`My superpower is ${answer}`);
              console.log(profile.join(". ") + ".");
              rl.close();
            });
          });
        });
      });
    });
  });
});

