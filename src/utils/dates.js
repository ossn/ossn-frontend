import {numberWithSuffix} from './numbers';

export const getDayName = (num) => {
  switch (num) {
    case 0: return 'Monday';
    case 1: return 'Tuesday';
    case 2: return 'Wensday';
    case 3: return 'Thursday';
    case 4: return 'Friday';
    case 5: return 'Saturday';
    case 6: return 'Sunday';
    default: return 'ERROR parsing day';
  }
}

export const getMonthName = (num) => {
  switch (num) {
    case 0: return 'Jenuary';
    case 1: return 'February';
    case 2: return 'March';
    case 3: return 'April';
    case 4: return 'May';
    case 5: return 'June';
    case 6: return 'July';
    case 7: return 'August';
    case 8: return 'September';
    case 9: return 'October';
    case 10: return 'November';
    case 11: return 'December';
    default: return 'ERROR parsing month ';
  }
}

export const verboseDate = (timestamp) => {
  const date = new Date(timestamp);
  const verboseDayName = getDayName(date.getDay());
  const verboseMonthName = getMonthName(date.getMonth());
  const suffixedDate = numberWithSuffix(date.getDate());

  const dateString = `Date: ${verboseDayName}, ${verboseMonthName} ${suffixedDate} ${date.getFullYear()}`;

  return dateString;
}
