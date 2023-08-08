module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  console.log(str);
  for (let i=0; i<bracketsConfig.length; i++) {
      for (let j=0; j<str.length; j++) {
          if (str[j] == bracketsConfig[i][0] &&
              str[j + 1] == bracketsConfig[i][1]) {
                  str.splice(j, 2);
                  j = j - 2;
                  i = 0;
          }
      }
  }
  return str.length == 0 ? true : false
}
