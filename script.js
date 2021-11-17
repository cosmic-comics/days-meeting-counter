const FIN = new Date("Nov 21 2021 10:00:00 GMT-8");

function getElements(...names) {
  const elements = [];
  for (const name of names) {
    elements.push(document.getElementById(name));
  }
  return elements;
}

const [YEARS, MONTHS, DAYS, HOURS, MINUTES, SECONDS] = getElements(
  "years",
  "months",
  "days",
  "hours",
  "minutes",
  "seconds"
);

const MILI_SECONDS = 1000;
const MILI_MINUTES = MILI_SECONDS * 60;
const MILI_HOURS = MILI_MINUTES * 60;
const MILI_DAYS = MILI_HOURS * 24;
const MILI_MONTHS = MILI_DAYS * (365 / 12);
const MILI_YEARS = MILI_MONTHS * 12;

const updateCountdown = () => {
  const DIFFERENCE = Math.abs(FIN - new Date());

  YEARS.textContent = Math.floor(DIFFERENCE / MILI_YEARS);
  MONTHS.textContent = Math.floor((DIFFERENCE % MILI_YEARS) / MILI_MONTHS);
  DAYS.textContent = Math.floor((DIFFERENCE % MILI_MONTHS) / MILI_DAYS);
  HOURS.textContent = Math.floor((DIFFERENCE % MILI_DAYS) / MILI_HOURS);
  MINUTES.textContent = Math.floor((DIFFERENCE % MILI_HOURS) / MILI_MINUTES);
  SECONDS.textContent = Math.floor((DIFFERENCE % MILI_MINUTES) / MILI_SECONDS);
};

updateCountdown();

setInterval(updateCountdown, MILI_SECONDS);
