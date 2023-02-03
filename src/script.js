function alertCityTime(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "houston") {
      alert(`It is ${houstonTime} in Houston, Texas, USA 🇺🇸`);
    }
    if (event.target.value === "seoul") {
      alert(`It is ${seoulTime} in Seoul, South Korea 🇰🇷`);
    }
    if (event.target.value === "taipei") {
      alert(`It is ${taipeiTime} in Taipei, Taiwan 🇹🇼`);
    }
  }
}

let citiesSelectElement = document.querySelector("#cities-time");

citiesSelectElement.addEventListener("change", alertCityTime);

let houstonTime = moment()
  .tz("America/Chicago")
  .format("dddd, MMMM Do, YYYY, H:mm A");
let seoulTime = moment().tz("Asia/Seoul").format("dddd, MMMM Do, YYYY, H:mm A");
let taipeiTime = moment()
  .tz("Asia/Taipei")
  .format("dddd, MMMM Do, YYYY, H:mm A");
