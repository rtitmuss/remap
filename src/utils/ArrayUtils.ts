export const outputUint8Array = (title: string, array: Uint8Array) => {
  console.log(`[${title}]`);
  let lines = '';
  let out = '';
  let ascii = '';
  for (let i = 0; i < array.length; i++) {
    // out += String.fromCharCode(array[i]);
    let value = Number(array[i]).toString(16).toUpperCase();
    if (value.length === 1) {
      value = '0' + value;
    }
    out += value;
    if (i % 2 !== 0) {
      out += ' ';
    }
    if (0x20 <= array[i] && array[i] <= 0x7e) {
      ascii += String.fromCharCode(array[i]);
    } else {
      ascii += '.';
    }
    if ((i + 1) % 16 === 0) {
      lines += out + ' ' + ascii + '\n';
      out = '';
      ascii = '';
    }
  }
  if (out) {
    lines += out + ' ' + ascii + '\n';
  }
  console.log(lines);
};
