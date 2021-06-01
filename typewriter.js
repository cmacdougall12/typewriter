const sentence = "hello there from lighthouse labs";
let i = 0;
let index = 0;

for (const char of sentence) {
  setTimeout(() => {
    index++;
    index === sentence.length ? process.stdout.write(char + `\n`) : process.stdout.write(char);
  }, i);
  i += 100;
}

