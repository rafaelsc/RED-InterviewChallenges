import { Challenges } from '../src/index';

const challenge = new Challenges();

test('Chanlend01 - Invlid Entries', () => {
  expect(() => challenge.angleOfMinutes(-1)).toThrowError;
  expect(() => challenge.angleOfMinutes(60)).toThrowError;
});

test('Challege - #01 - Minute 00 ot 60 should be 0', () => {
  expect(challenge.angleOfMinutes(0)).toBe(0);
  expect(challenge.angleOfMinutes(60)).toBe(0);
});

test('Challege - #01 - Right Angles', () => {
  expect(challenge.angleOfMinutes(15)).toBe(90);
  expect(challenge.angleOfMinutes(30)).toBe(180);
  expect(challenge.angleOfMinutes(45)).toBe(180 + 90);
});

test('Challege - #01 - Other Angles', () => {
  expect(challenge.angleOfMinutes(20)).toBe(120);
  expect(challenge.angleOfMinutes(59)).toBe(354);
  expect(challenge.angleOfMinutes(31)).toBe(186);
});

test('Challege - #02 - Stock Prices', () => {
  expect(challenge.stockProfit([20, 30])).toBe(10);
  expect(challenge.stockProfit([20, 30, 10])).toBe(10);
  expect(challenge.stockProfit([20, 30, 10, 5, 50])).toBe(45);
  expect(challenge.stockProfit([45, 24, 35, 31, 40, 38, 11])).toBe(16);

  expect(challenge.stockProfit([])).toBeUndefined;
  expect(challenge.stockProfit([0])).toBeUndefined;
  expect(challenge.stockProfit([20, 10])).toBeUndefined;
  expect(challenge.stockProfit([20, 10, 5])).toBeUndefined;
});

test('Challege - #03 - Twelve Days Of Christmas', () => {
  challenge.singTheTwelveDaysOfChristmas();
});

test('Challege - #04 - Reverse String', () => {
  expect(challenge.reserveWordsInPhrase('Hello')).toBe('Olleh');
  expect(challenge.reserveWordsInPhrase('ola')).toBe('alo');
  expect(challenge.reserveWordsInPhrase('UOU')).toBe('UOU');
  expect(challenge.reserveWordsInPhrase('Hello how are you')).toBe(
    'Olleh woh era uoy'
  );
});

test('Challege - #05 - Is Palindrome', () => {
  expect(challenge.isPalindrome('racecar')).toBeTruthy;
  expect(challenge.isPalindrome('a')).toBeTruthy;
  expect(challenge.isPalindrome('abba')).toBeTruthy;
  expect(challenge.isPalindrome('Eve')).toBeTruthy;

  expect(challenge.isPalindrome('car')).toBeFalsy;
  expect(challenge.isPalindrome('')).toBeFalsy;
});

test('Challege - #05 - pigLatin', () => {
  expect(challenge.pigLatin('pig')).toBe('igpay');
  expect(challenge.pigLatin('latin')).toBe('atinlay');
  expect(challenge.pigLatin('happy')).toBe('appyhay');
  expect(challenge.pigLatin('banana')).toBe('ananabay');

  expect(challenge.pigLatin('cheers')).toBe('eerschay');
  expect(challenge.pigLatin('smile')).toBe('ilesmay');

  expect(challenge.pigLatin('eat')).toBe('eatay');
  expect(challenge.pigLatin('egg')).toBe('eggay');
});


test('Challege - #05 - Range and Sum', () => {
  expect(challenge.range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(challenge.range(1, 10, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(challenge.range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  expect(challenge.range(5, 2, -1)).toEqual([5, 4, 3, 2]);

  expect(challenge.sum(challenge.range(1, 10))).toBe(55);
});

test('Challege - #06 - toRGB', () => {
  expect(challenge.toRGB(1, 1, 1)).toEqual('#ffffff');
  expect(challenge.toRGB(0, 0, 0)).toEqual('#000000');
  expect(challenge.toRGB(0, 1, 0)).toEqual('#00ff00');
  expect(challenge.toRGB(0, 0.914, 0)).toEqual('#00e900');
});

