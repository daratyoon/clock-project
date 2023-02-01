function alertCityTime(event) {
  alert(event.target.value);
}

let citiesSelectElement = document.querySelector("#cities-time");

citiesSelectElement.addEventListener("change", alertCityTime);
