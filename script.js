function play() {
  new Audio(
    "https://cosmic-comics.github.io/days-meeting-counter/ddlc.mp3"
  ).play();
}

document.getElementById("container").onClick = () => {
  play();
};
