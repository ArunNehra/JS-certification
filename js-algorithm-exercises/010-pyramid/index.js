// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {
  for (let i = 1; i <= n; i++) {
    level = "";
    for (let k = 1; k <= n - i; k++) {
      level += " ";
    }
    for (let j = 0; j != 2 * i - 1; j++) {
      level += "#";
    }
    for (let k = i + 1; k <= n; k++) {
      level += " ";
    }
    console.log(level);
  }
}

module.exports = pyramid;
