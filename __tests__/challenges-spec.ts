import { Greeter, Challenges } from '../src/index';

const challenge = new Challenges();

test('Chanlend01 - Invlid Entries', () => {
  expect(() => challenge.angleOfMinutes(-1)).toThrowError;
  expect(() => challenge.angleOfMinutes(60)).toThrowError;
});

test('Chanlend01 - Minute 00 ot 60 should be 0', () => {
  expect(challenge.angleOfMinutes(0)).toBe(0);
  expect(challenge.angleOfMinutes(60)).toBe(0);
});

test('Chanlend01 - Right Angles', () => {
  expect(challenge.angleOfMinutes(15)).toBe(90);
  expect(challenge.angleOfMinutes(30)).toBe(180);
  expect(challenge.angleOfMinutes(45)).toBe(180+90);
});

test('Chanlend01 - Other Angles', () => {
  expect(challenge.angleOfMinutes(20)).toBe(120);
  expect(challenge.angleOfMinutes(59)).toBe(354);

  expect(challenge.angleOfMinutes(31)).toBe(186);
});

