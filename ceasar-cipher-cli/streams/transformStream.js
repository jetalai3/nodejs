const { Transform } = require('stream');
const caesarShift = require('../encoding/ceasarShift');

const transformStream = (shift, action) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      this.push(caesarShift(chunk, shift, action));
      callback();
    }
  });
};

module.exports = transformStream;
