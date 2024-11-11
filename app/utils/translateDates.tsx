export const translateDates = (date: Date) => {
  const newDate = new Date(date);
  const minutes = (newDate.getMinutes() < 10 ? "0" : "") + newDate.getMinutes()
  const showTime = date
    ? `${newDate.getHours()}:${minutes}`
    : null;
  const todaysDate = new Date();
  const isToday = date
    ? newDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0)
    : null;
  const showDate = date ? `${newDate.getDate()}/${newDate.getMonth()}` : null;
  return { showDate, showTime, isToday };
};
