function getIss() {
  fetch("http://api.open-notify.org/astros.json")
  .then(response => response.json());
}