/**
 * @param {number[]} prices
 * @return {number}
 */


// input is array of prices for day i
// can only complete one transaction
// buy once, sell once
// return max profit
// ie sell - buy
// if max profit is negative, no transaction is done and return 0
var maxProfit = function(prices) {
    // each buy finds what the max price could be
    // slide the prices to a sub array and compare from i+1...n assuming you buy price i
//     let bestProfit = {} // where bestPrice[i] = max profit for that index

//     const profit = (prices, i) => {
//         if (bestProfit[i]) return bestProfit[i]
//         if (i === prices.length-1) return 0
//         let buyPrice = prices[i]
//         let sellPrice = Math.max(...prices.slice(1))
//         bestProfit[i] = sellPrice - buyPrice
//     }
// brute force O(n^2) -- quadratic time. could do better
    // let maxProfit = 0
    // for (let i=0; i<prices.length-1; i++){
    //     for(let j=1; j < prices.length; j++){
    //         let profit = prices[j] - prices[i]
    //         if (maxProfit < profit) {
    //             maxProfit = profit
    //         }
    //     }
    // }
    // return maxProfit


    // O(n)
    // ---
    let minPrice = Math.max(...prices)
    let maxProfit = 0
    for (let i=0; i<prices.length; i++){
        if (prices[i] < minPrice){
            minPrice = prices[i]
        } else if (prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice
        }
    }
    return maxProfit

};
