const decodeTheRing = function (s, p) {

      let memo = Array.from(new Array(s.length + 1), () => new Array(p.length + 1).fill(null));
      function isMatchRecursive(len1, len2) {
      if (len1 === 0 && len2 === 0) {
          return true;
      }

      if (len1 < 0 || len2 < 0) {
          return false;
      }

      if(memo[len1][len2] !== null) {
         return memo[len1][len2];
      }

      if (p[len2 - 1] === '?' || p[len2 - 1] === s[len1 - 1]) {
          return memo[len1][len2] = isMatchRecursive(len1 - 1, len2 - 1);

      } else if (p[len2 - 1] === '*') {

          let excludeStar = isMatchRecursive(len1, len2 - 1);
          let includeStar = isMatchRecursive(len1 - 1, len2);

          return memo[len1][len2] = (excludeStar || includeStar);

      } else if (p[len2 - 1] !== s[len1 - 1]) {
          return memo[len1][len2] = false;
      }
  }

  isMatchRecursive(s.length, p.length);
  console.log(memo);

  return memo[s.length][p.length];

  };
  
  module.exports = decodeTheRing;