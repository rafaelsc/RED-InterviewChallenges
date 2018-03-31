import { Greeter, Challenges } from '../src/index';

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
  expect(challenge.angleOfMinutes(45)).toBe(180+90);
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

