function getIss() {
  fetch("http://api.open-notify.org/astros.json")
  .then(response => response.json())
  .then(json => console.log(json));
}

document.getElementByName("div") 