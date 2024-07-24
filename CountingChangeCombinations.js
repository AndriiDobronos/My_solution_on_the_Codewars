function countChange(money, coins) {
    // Initialize a dp array with length amount + 1 and fill it with 0
    let dp = new Array(money + 1).fill(0);

    // There is one way to make change for 0, which is using no coins
    dp[0] = 1;

    // Iterate over each coin of coins
    for (let coin of coins) {
        // Update the dp array for all amounts from coin to money
        for (let i = coin; i <= money; i++) {
            dp[i] += dp[i - coin];
        }
    }

    // The number of ways to make change for the amount is stored in dp[money]
    return dp[money];
}

console.log(countChange(4,[1, 2] )); // 3
console.log(countChange(10,[2,3,5])); // 4
console.log(countChange(11, [5,7])) //0