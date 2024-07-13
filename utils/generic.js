// ============
// Export
// ============
module.exports = {
  /**
   *
   * @param {String} targetStr - The target string to check
   * @param {Array} strArr     - The array of valid strings
   * @returns                  - The string in strArr with the lower difference in occurrences of the letters
   */
  findClosestString: (targetStr, strArr) => {
    const getCharCount = (str) => {
      // Return a register of the char occurences, i.e. 'click' = { 'c': 2, 'l': 1, 'i': 1, 'k': 1 }
      const reg = {};
      for (let s of str) {
        reg[s] = (reg[s] || 0) + 1;
      }
      return reg;
    };

    let minDiff = Infinity;
    let closestStr = null;
    const targetCount = getCharCount(targetStr);

    strArr.forEach((validStr) => {
      const currCount = getCharCount(validStr);
      let totDiff = 0;

      // Consider difference between chars count in the targetStr, and chars count in the current validStr
      for (let char in targetCount) {
        totDiff += Math.abs(targetCount[char] - (currCount[char] || 0));
      }

      // Chars present in current validStr but not in the targetStr will increase the difference
      for (let char in currCount) {
        if (!(char in targetCount)) {
          totDiff += currCount[char];
        }
      }

      // Update closest string
      if (totDiff < minDiff) {
        minDiff = totDiff;
        closestStr = validStr;
      }
    });

    return closestStr;
  },
};
