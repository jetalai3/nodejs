const fs = require('fs');

const fileValidation = (file, access, message) => {
  // eslint-disable-next-line no-bitwise
  fs.access(file, fs.constants.F_OK | access, err => {
    if (err) {
      throw Error(
        `File ${file} ${err.code === 'ENOENT' ? 'does not exist' : message}`
      );
    }
  });
  fs.lstat(file, (err, stats) => {
    if (err) {
      throw err;
    }
    if (stats.isDirectory()) {
      throw Error(`File ${file} is a directory`);
    }
  });
};

const validateCLIArgs = (options, rawArguments) => {
  const indexOfShiftArgument =
    rawArguments.indexOf('-s') !== -1
      ? rawArguments.indexOf('-s')
      : rawArguments.indexOf('--shift');
  if (/[^0-9]/.test(rawArguments[indexOfShiftArgument + 1])) {
    throw Error(
      `${rawArguments[indexOfShiftArgument]} should be a valid integer`
    );
  }
  if (options.action !== 'encode' && options.action !== 'decode') {
    throw Error('Action must be either encode or decode');
  }
  if (options.input) {
    fileValidation(options.input, fs.constants.R_OK, 'is not readable');
  }
  if (options.output) {
    fileValidation(options.output, fs.constants.W_OK, 'is read-only');
  }
};

module.exports = validateCLIArgs;
