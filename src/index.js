const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const decode = (expr) => {
    const result = [];

    for (let i = 0; i < expr.length; i += 10) {
        const letter = expr.slice(i, i + 10);
        let key = '';

        if (letter === '**********') {
            result.push(' ');
            continue;
        }

        for (let j = 0; j < 10; j += 2) {
            const char = parseInt(letter.slice(j, j + 2));

            if (char === 10) {
                key += '.';
            } else if (char === 11) {
                key += '-';
            }
        }

        result.push(MORSE_TABLE[key]);
    }

    return result.join('');
};

module.exports = {
    decode
};