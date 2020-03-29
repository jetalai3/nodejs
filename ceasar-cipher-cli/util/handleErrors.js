/* eslint-disable no-process-exit */
const handleErrors = () => {
  process
    .on(
      'uncaughtException',
      err => console.error(err.message) || process.exit(999)
    )
    .on('SIGINT', () => process.exit(0))
    .on(
      'exit',
      () => process.exitCode && console.log(`Exit code: ${process.exitCode}`)
    );
};

module.exports = handleErrors;
