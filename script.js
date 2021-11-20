// i hate this, but not in the mod to do it better
// TODO: to esm, refactor and stuff

function getElements(...names) {
  const elements = [];
  for (const name of names) {
    elements.push(document.getElementById(name));
  }
  return elements;
}

const [MESSAGE_TEXT, YEARS, MONTHS, DAYS, HOURS, MINUTES, SECONDS] =
  getElements(
    "messageText",
    "years",
    "months",
    "days",
    "hours",
    "minutes",
    "seconds"
  );

const meetingDate = new Date("Nov 20 2021 12:00:00 GMT-8");

if (meetingDate - Date.parse(new Date()) < 0) {
  MESSAGE_TEXT.innerHTML = "The meeting ended ago";
} else {
  MESSAGE_TEXT.innerHTML = "The meeting will start in";
}

const MILI_SECONDS = 1000;
const MILI_MINUTES = MILI_SECONDS * 60;
const MILI_HOURS = MILI_MINUTES * 60;
const MILI_DAYS = MILI_HOURS * 24;
const MILI_MONTHS = MILI_DAYS * (365 / 12);
const MILI_YEARS = MILI_MONTHS * 12;

const updateCountdown = () => {
  const DIFFERENCE = Math.abs(meetingDate - new Date());

  YEARS.textContent = Math.floor(DIFFERENCE / MILI_YEARS);
  MONTHS.textContent = Math.floor((DIFFERENCE % MILI_YEARS) / MILI_MONTHS);
  DAYS.textContent = Math.floor((DIFFERENCE % MILI_MONTHS) / MILI_DAYS);
  HOURS.textContent = Math.floor((DIFFERENCE % MILI_DAYS) / MILI_HOURS);
  MINUTES.textContent = Math.floor((DIFFERENCE % MILI_HOURS) / MILI_MINUTES);
  SECONDS.textContent = Math.floor((DIFFERENCE % MILI_MINUTES) / MILI_SECONDS);
};

updateCountdown();

setInterval(updateCountdown, MILI_SECONDS);
