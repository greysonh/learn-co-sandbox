function getIss() {
  const issInfo = fetch("http://api.open-notify.org/astros.json");
  console.log(issInfo);
}