var isValid = function (s) {
  //正确的情况有两种:
  //{}[]{}
  //{[{}]}
  //所以还是需要一个数组去记录？
  let arr = s.split("");
  let leftSet = new Set(["(", "[", "}"]);
  let map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  let unclosed = [];
  for (item of arr) {
    if (leftSet.has(item)) {
      //如果匹配到左括号
      unclosed.push(item);
    } else if (map.get(unclosed[-1]) === item) {
      //如果匹配到右括号并且 能够跟最新的合并在一起
      unclosed.pop();
    } else {
      //如果匹配到右括号并且不能合并
      return false;
    }
  }
  return true;
};

console.log(isValid("([])"));
