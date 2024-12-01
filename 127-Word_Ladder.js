/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let list = new Set(wordList);
  let visited = new Set();
  let queue = [[beginWord]];
  let steps = 1;

  if (!list.has(endWord)) {
      return 0;
  }

  while (queue.length > 0){
      let words = queue.pop();
      let newWords = [];

      for (let word of words) {
          for (let i = 0; i < beginWord.length; i++) {
              for (let j = 0; j < 26; j++) {
                  let chars = word.split('');
                  chars[i] = String.fromCharCode(97 + j);

                  let newWord = chars.join('');

                  if (newWord === endWord) {
                      return steps + 1;
                  }

                  if (visited.has(newWord) || !list.has(newWord)) {
                      continue;
                  }

                  visited.add(newWord);
                  newWords.push(newWord);
              }
          }
      }

      if (newWords.length > 0) {
          queue.push(newWords);
      }

      steps++;
  }
  return 0;
};
