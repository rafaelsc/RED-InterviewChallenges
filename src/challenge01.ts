export class Challenges {

  public angleOfMinutes(minuteOfTheCurrentHour: number): number {
    if (minuteOfTheCurrentHour < 0 || minuteOfTheCurrentHour > 60) {
      throw new RangeError(
        'Invalid minuteOfTheCurrentHour. Allow only values from 0 to 60'
      );
    }
    if (minuteOfTheCurrentHour === 0 || minuteOfTheCurrentHour === 60) {
      return 0;
    }
    return (360/60)*minuteOfTheCurrentHour;
  }

}
