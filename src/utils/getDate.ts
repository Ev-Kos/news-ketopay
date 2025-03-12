export const getDate = (date: string, isOnlyDate: boolean) => {
  const dateRaw = new Date(date);
  let day = String(dateRaw.getDate());
  let hour = dateRaw.getHours();
  let monthNumber = String(dateRaw.getMonth()+1);
  let year = dateRaw.getFullYear();
  let min = String(dateRaw.getMinutes());
  const period = dateRaw.getHours() < 12 ? 'AM' : 'PM';

  const monthShortArr = dateRaw.toLocaleDateString('en-US', { month: 'short' }).split('')
  const monthShort = monthShortArr[0].toUpperCase() + monthShortArr.slice(1, monthShortArr.length - 1)
  if(Number(day) < 10) {
    day = `0${day}`
  }
  if(Number(monthNumber) < 10) {
    monthNumber = `0${monthNumber}`
  }
  if(Number(min) < 10) {
    min = `0${min}`
  }
  if(isOnlyDate) {
    return `${day}.${monthNumber}.${year}`
  }

  return `${monthShort} ${day}, ${year}, ${hour}.${min} ${period}`
};
