const time = document.getElementById('currentUTCTime');
const day = document.getElementById('currentDayOfTheWeek');

const a = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = daysOfWeek[a.getDay()];

time.textContent = a.getTime()
day.textContent = dayOfWeek;