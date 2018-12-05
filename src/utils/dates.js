import { numberWithSuffix } from './numbers';

// convert the `new Date().getDay()` number to it's verbose representation.
export const getDayName = num => {
  switch (num) {
    case 0:
      return 'Monday';
    case 1:
      return 'Tuesday';
    case 2:
      return 'Wednesday';
    case 3:
      return 'Thursday';
    case 4:
      return 'Friday';
    case 5:
      return 'Saturday';
    case 6:
      return 'Sunday';
    default:
      return 'ERROR parsing day';
  }
};

// conver the `new Date().getMonth()` number to it's verbose representation.
export const getMonthName = num => {
  switch (num) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
    default:
      return 'ERROR parsing month ';
  }
};

// project specific.
// get the date string from the announcements and job listing
export const verboseDate = timestamp => {
  const date = new Date(timestamp);
  const verboseDayName = getDayName(date.getDay());
  const verboseMonthName = getMonthName(date.getMonth());
  const suffixedDate = numberWithSuffix(date.getDate());

  const dateString = `${verboseDayName}, ${verboseMonthName} ${suffixedDate} ${date.getFullYear()}`;

  return dateString;
};
