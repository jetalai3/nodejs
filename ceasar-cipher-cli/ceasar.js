const { pipeline } = require('stream');
const parseCLIArgs = require('./util/parseCLIArgs');
const readStream = require('./streams/readStream');
const transformStream = require('./streams/transformStream');
const writeStream = require('./streams/writeStream');

const options = parseCLIArgs();

pipeline(
  readStream(options.input),
  transformStream(options.shift, options.action),
  writeStream(options.output),
  err => err && console.error(err)
);
