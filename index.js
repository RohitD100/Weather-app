

let key = '55c5ae65cc3939d0af26303723f81ff3';
let container = document.getElementById('container')
let map = document.getElementById('gmap_canvas')


async function getWether() {
  try {
    let city = document.getElementById('city').value;

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)



    let data = await res.json()


    appendData(data)


  } catch (err) {
    // console.log(err);
  }
}

function appendData(data) {

  container.innerHTML = '';
  let img = document.createElement('img')
  img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhImnN1KCxe8k8DDt0pCl01uqmq6yZDPm3w&usqp=CAU'

  let name = document.createElement('p');
  name.innerText = `Name - ${data.name}`

  let temp = document.createElement('p');
  temp.innerText = `Temp - ${data.main.temp}Fahrenheit`

  let humidity = document.createElement('p');
  humidity.innerText = `Humidity - ${data.main.humidity}%`

  let pressure = document.createElement('p');
  pressure.innerText = `Pressure - ${data.main.pressure}pascal`

  let min = document.createElement('p');
  min.innerText = `Min-Temperature - ${data.main.temp_min}°F`

  let max = document.createElement('p');
  max.innerText = `Max-Temperature - ${data.main.temp_max}°F`

  let wind = document.createElement('p');
  wind.innerText = `Wind-Speed- ${data.wind.speed} Km/h`

  let sunrise = document.createElement('p');
  sunrise.innerText = `sunrise- ${data.sys.sunrise}`

  let sunset = document.createElement('p');
  sunset.innerText = `Sunset- ${data.sys.sunset}`

  container.append(img, name, temp, humidity, pressure, min, max, wind, sunrise, sunset)

  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

let hh = document.getElementById('rr')
let date = new Date();
hh.innerText = date;



var variable1 = document.getElementById("demo1");
function getlocation() {
  navigator.geolocation.getCurrentPosition(showLoc, errHand);
}
function showLoc(pos) {
  variable1.innerHTML =
    "Latitude: " +
    pos.coords.latitude +
    "<br>Longitude: " +
    pos.coords.longitude;
}

function errHand(err) {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      variable1.innerHTML =
        "The application doesn't have the" +
        "permission to make use of location services";
      break;
    case err.POSITION_UNAVAILABLE:
      variable1.innerHTML = "The location of the device is uncertain";
      break;
    case err.TIMEOUT:
      variable1.innerHTML = "The request to get user location timed out";
      break;
    case err.UNKNOWN_ERROR:
      variable1.innerHTML =
        "Time to fetch location information exceeded" +
        "the maximum timeout interval";
      break;
  }
}





async function dikhao() {

  try {
    let res1 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=21.1458004&lon=79.0881546&exclude=current,hourly,minutely,alerts&units=metric&appid=55c5ae65cc3939d0af26303723f81ff3`)
    let all = await res1.json()
    // console.log(all);
    if (all !== undefined) {
      pandit(all.daily,);
    }

  } catch (err) {
    console.log(err);
  }

}

let end = document.getElementById('end')

let arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function pandit(all) {
  for (let i = 0; i < all.length - 1; i++) {
    let div = document.createElement('div')
    let heading = document.createElement('h1')
    heading.innerText = arr[i];
    let img = document.createElement('img')
    if (arr[i] > 35) {
      img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwvfH1GxkMPhguH4cfdQrVjPzW667L3S_Hg&usqp=CAU'
    } else if (arr[i] < 35) {
      img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQDVMzoLzoGQeZ13AdhA_Xlgz7l0Rnz9vag&usqp=CAU'
    } else {
      img.src = 'https://cdn.pixabay.com/photo/2016/03/18/15/07/slightly-cloudy-1265204__340.png'
    }

    let para = document.createElement('p')
    para.innerText = `${all[i].temp.day}  °C`;
    div.append(heading, img, para)
    end.append(div)
  }
}



