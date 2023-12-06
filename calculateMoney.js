// https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let ans = 0;
  let monday = 1;
  while (n > 0) {
    //number of days
    for (let day = 0; day < Math.min(n, 7); day++) {
      //looping till minimum day
      ans += monday + day;
    }
    n -= 7; //once done subtract 7
    monday++; // each monday increments the value
  }
  return ans;
};

console.log(totalMoney(20));

//arithmetic formula for sum of numbers: k.(F+L)/2
var totalMoneyV2 = function (n) {};
