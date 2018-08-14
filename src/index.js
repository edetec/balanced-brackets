// @flow

/**
 * This function determines if the order of the brackets is valid.
 * @param brackets String of brackets.
 * @returns Boolean value.
 */
const isBalancedBrackets = (brackets: string): boolean => {
  if (brackets.length <= 1) {
    return false;
  }

  let matchingOpeningBracket;
  let ch;
  const stack = [];

  const openingBrackets = ["[", "{", "("];
  const closingBrackets = ["]", "}", ")"];

  for (let i = 0; i < brackets.length; i++) {
    ch = brackets[i];

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)];
      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return false;
      }
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0;
};

export default isBalancedBrackets;
