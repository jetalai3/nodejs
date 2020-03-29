function caesarShift(str, amount, action) {
  let output = '';

  amount = action === 'decode' ? -amount : amount;

  for (let i = 0; i < str.length; i++) {
    let c = String.fromCharCode(str[i]);
    console.log(`c:${c}`);
    console.log(`str[i]:${str[i]}`);
    console.log(`match: ${c.match(/[a-z]/i)}`);
    if (c.match(/[a-z]/i)) {
      const code = str[i];
      console.log(`code:${code}`);
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += c;
  }
  return output;
}

module.exports = caesarShift;
