/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const tCountMap = new Map();
  for (const char of t) {
    const currentFrequence = tCountMap.get(char);
    tCountMap.set(char, currentFrequence ? currentFrequence + 1 : 1);
  }

  const windowCountMap = new Map();
  let left = 0
  let right = 0;
  let minLeft = 0;
  let minLen = s.length + 1;
  let formed = 0;
  let required = tCountMap.size;

  while (right < s.length) {
    windowCountMap.set(s[right], windowCountMap.has(s[right]) ? windowCountMap.get(s[right]) + 1 : 1)

    if (windowCountMap.get(s[right]) === tCountMap.get(s[right])) {
      formed++
    }

    while (left <= right && formed === required) {
      if (minLen > right - left + 1) {
        minLen = right - left + 1;
        minLeft = left;
      }

      windowCountMap.set(s[left], windowCountMap.get(s[left]) - 1)
      if (windowCountMap.get(s[left]) < tCountMap.get(s[left])) {
        formed--;
      }
      left++;
    }

    right++;
  }

  if (minLen === s.length + 1) {
    return ''
  }

  return s.slice(minLeft, minLeft + minLen)
};

console.log('answer: ', minWindow('ADOBECODEBANC', 'ABC'))