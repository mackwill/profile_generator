const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answerObj = {
  name: "",
  activity: "",
  music: "",
  mealType: "",
  meal: "",
  sport: "",
  superpower: "",
};

rl.question("What's your name ", (answer) => {
  answerObj.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    answerObj.activity = answer;

    rl.question(
      "What do you like listening to while doing that? ",
      (answer) => {
        answerObj.music = answer;

        rl.question("Which meal is your favourite? ", (answer) => {
          answerObj.mealType = answer;
          rl.question(
            "What's your favourite thing to eat for that meal? ",
            (answer) => {
              answerObj.meal = answer;

              rl.question("What sport is your favourite? ", (answer) => {
                answerObj.sport = answer;

                rl.question("What's your superpower? ", (answer) => {
                  answerObj.superpower = answer;
                  console.log(
                    `${answerObj.name} loves listening to ${answerObj.music} while ${answerObj.activity}, devouring ${answerObj.meal} for ${answerObj.mealType}, prefers ${answerObj.sport} over any other sport, and is amazing at ${answerObj.superpower}.`
                  );
                  rl.close();
                });
              });
            }
          );
        });
      }
    );
  });
});
