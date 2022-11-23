const spins = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let i = 0; i < spins.length; i++) {
  if (spins.length - 1 === i) {
    setTimeout(() => {
      process.stdout.write(`\r${spins[i]}\n`);
    }, 300 + (i * 200));
    } else {
      setTimeout(() => {
      process.stdout.write(`\r${spins[i]}   `);
      }, 300 + (i * 200));
  }
}
