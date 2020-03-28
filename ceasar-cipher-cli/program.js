const { program } = require('commander');

program
  .storeOptionsAsProperties(false)
  .option('-s, --shift', 'number of characters to shift')
  .option('-i, --input', 'input file path')
  .option('-o, --output', 'output file path')
  .option('-a, --action', 'action encode/decode');

program.parse(process.argv);

// console.log(process.argv);
// console.log(program.rawArgs);

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let chunk;
  // eslint-disable-next-line no-cond-assign
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
