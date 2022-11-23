const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
  // process.stdout.write(char);
  setTimeout(() => {
    console.log(char);
  }, 1000);
}