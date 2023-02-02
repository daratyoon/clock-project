function alertCityTime(event) {
  if (event.target.value.lenght > 0) {
    alert(event.target.value);
  }
  if (event.target.value === "houston") {
    alert(`It is ${houstonTime} in Houston, Texas, USA`);
  }

  let houstonTime = moment()
    .tz("America/Chicago")
    .format("dddd MM Do, YYYY, H:mm A");
  let seouldTime = moment().tz("Asia/Seoul").format("dddd MM Do, YYYY, H:mm A");
  let taipeiTime = moment()
    .tz("Asia/Taipei")
    .format("dddd MM Do, YYYY, H:mm A");
}

let citiesSelectElement = document.querySelector("#cities-time");

citiesSelectElement.addEventListener("change", alertCityTime);
