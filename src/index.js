module.exports = function reverse (n) {
    const isDigit = c => '0' <= c && c <= '9';
    return +n.toString()
        .split('')
        .filter(isDigit)
        .reverse()
        .join('');
}
