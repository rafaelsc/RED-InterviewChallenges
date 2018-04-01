export class Challenges {

  public angleOfMinutes(minuteOfTheCurrentHour:number): number {
    if (minuteOfTheCurrentHour < 0 || minuteOfTheCurrentHour > 60) {
      throw new RangeError('Invalid minuteOfTheCurrentHour. Allow only values from 0 to 60');
    }
    if (minuteOfTheCurrentHour === 0 || minuteOfTheCurrentHour === 60) {
      return 0;
    }
    return (360/60)*minuteOfTheCurrentHour;
  }

  public stockProfit(prices:number[]):number | undefined {
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

  public singTheTwelveDaysOfChristmas():void{
    var songPattern = [
      {ordinal: 'First', number: '', present: 'a Partridge in a Pear Tree.'},
      {ordinal: 'Second', number: 'Two', present: 'Turtle Doves'},
      {ordinal: 'Third', number: 'Three', present: 'French Hens'},
      {ordinal: 'Fourth', number: 'Four', present: 'Calling Birds'},
      {ordinal: 'Fifth', number: 'Five', present: 'Gold Rings'},
      {ordinal: 'Sixth', number: 'Six', present: 'Geese a-Laying'},
      {ordinal: 'Seventh', number: 'Seven', present: 'Swans a-Swimming'},
      {ordinal: 'Eighth', number: 'Eight', present: 'Maids a-Milking'},
      {ordinal: 'Ninth', number: 'Nine', present: 'Ladies Dancing'},
      {ordinal: 'Tenth', number: 'Ten', present: 'Lords a-Leaping'},
      {ordinal: 'Eleventh', number: 'Eleven', present: 'Pipers Piping'},
      {ordinal: 'Twelfth', number: 'Twelve', present: 'Drummers Drumming'},
    ];

    var song = "";
    var presentsAcc = "";
    var first = true;
    songPattern.forEach(i => {
      song += `On the ${i.ordinal} day of Christmas my true love sent to me\n`;
      presentsAcc = `${i.number === '' ?'' : i.number+' '}${i.present}\n${presentsAcc}`;
      song += `${presentsAcc}\n`;

      if(first){
        presentsAcc = `and ${presentsAcc}`;
      }
      first = false;
    });

    console.log(song);
  }

  public reserveWordsInPhrase(original:string):string{
    if (original === undefined || original === null){
      throw new Error('Invalid argument "prices"');
    }

    var reversePhase = '';
    var words = original.split(' ');
    words.forEach(words => {
      reversePhase += words.split('').reverse().join('') + ' ';
    });

    //Keep Original Captalization
    var finalPhase = '';
    for (let i = 0; i < original.length; i++) {
      const char = original[i];
      if(char.match(/([A-Z])/)){
        finalPhase += reversePhase[i].toLocaleUpperCase();
      } else {
        finalPhase += reversePhase[i].toLocaleLowerCase();
      }
    }
    return finalPhase;
  }

  public isPalindromeWord(original:string):boolean{
    if (original === undefined || original === null){
      throw new Error('Invalid argument "prices"');
    }
    return original.split('').reverse().join('').toLocaleLowerCase() === original.toLocaleLowerCase();
  }


  public pigLatin(original:string):string{
    if (original === undefined || original === null){
      throw new Error('Invalid argument "prices"');
    }

    var lastNonVogalIndex = 0;
    for (let i = 0; i < original.length; i++) {
      const char = original[i];
      lastNonVogalIndex = i;
      if(original[i].match(/[aeiou]/gi)){
        break;
      }
    }
    return original.split('').slice(lastNonVogalIndex).join('') + original.split('').slice(0, lastNonVogalIndex).join('') + 'ay';
  }

  public sum(numbers:number[]):number{
    var sum = 0;
    numbers.forEach(n => {
      sum += n;
    });
    return sum;
  }

  public range(start:number, end:number, step:number = 1):number[]{
    var array = [];
    array[0]= start;
    while(step > 0 ? (start + step <= end) : (start + step >= end)){
      array[array.length] = (start+= step);
    }
    return array;
  }

  public toRGB(r:number, g:number, b:number):string{
    r = Math.max(0, Math.min(r*255, 255));
    g = Math.max(0, Math.min(g*255, 255));
    b = Math.max(0, Math.min(b*255, 255));
    var rT = Math.floor(r).toString(16);
    var gT = Math.floor(g).toString(16);
    var bT = Math.floor(b).toString(16);
    rT = (rT.length == 1 ? '0' : '') + rT;
    gT = (gT.length == 1 ? '0' : '') + gT;
    bT = (bT.length == 1 ? '0' : '') + bT;

    return `#${rT}${gT}${bT}`;
  }

}
