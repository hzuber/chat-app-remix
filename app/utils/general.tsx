export const translateDates = (date: Date) => {
  const newDate = new Date(date);
  const showTime = date
    ? `${newDate.getHours()}:${newDate.getMinutes()}`
    : null;
  const todaysDate = new Date();
  const isToday = date
    ? newDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0)
    : null;
  const showDate = date ? `${newDate.getDate()}/${newDate.getMonth()}` : null;
  return { showDate, showTime, isToday };
};
