let prices=[7,1,5,3,6,4];

function maxProfit(prices){
  let buy=0;
  let sell=1;
  let max=0;
  while(sell<prices.length){
    let profit=prices[sell]-prices[buy];
    if(profit>max) max=profit;
    if(profit<0) buy=sell
    sell++
  }
  return max
}

console.log(maxProfit(prices));
