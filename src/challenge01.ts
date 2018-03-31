export class Challenges {

  public angleOfMinutes(minuteOfTheCurrentHour: number): number {
    if (minuteOfTheCurrentHour < 0 || minuteOfTheCurrentHour > 60) {
      throw new RangeError('Invalid minuteOfTheCurrentHour. Allow only values from 0 to 60');
    }
    if (minuteOfTheCurrentHour === 0 || minuteOfTheCurrentHour === 60) {
      return 0;
    }
    return (360/60)*minuteOfTheCurrentHour;
  }

  public stockProfit(prices:Array<number>):number | undefined {
    if (prices === undefined || prices === null){
      throw new Error('Invalid argument "prices"');
    }
    if (prices.length <= 1){
      return undefined;
    }

    var min = prices[0];
    var max = min;
    var topProfit = 0;

    prices.forEach(price => {
        if(price > max){
          max = price;
          topProfit = Math.max(topProfit, (max - min));
        }
        if(price < min){
          min = price;
          max = 0;
        }
    });
    return topProfit === 0 ? undefined : topProfit;
  }
}
