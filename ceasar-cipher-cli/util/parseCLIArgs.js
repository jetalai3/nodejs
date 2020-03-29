const { program } = require('commander');
const validateCLIArgs = require('./validateCLIArgs');

const parseCLIArgs = () => {
  program
    .storeOptionsAsProperties(false)
    .option('-i, --input <filename>', 'input file path')
    .option('-o, --output <filename>', 'output file path')
    .requiredOption('-s, --shift <num>', 'number of letters to shift', val =>
      parseInt(val, 10)
    )
    .requiredOption('-a, --action <action>', 'action encode/decode');

  const cliData = program.parse(process.argv);

  validateCLIArgs(cliData.opts(), cliData.rawArgs);

  return cliData.opts();
};

module.exports = parseCLIArgs;
