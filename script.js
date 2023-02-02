
const appkey = "508f2e319b2715fbadaedd34f595721b";

const searchButton = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search-txt");
const cityname = document.querySelector("#city-name");
const icon = document.querySelector("#icon");
const temperaturn = document.querySelector("#temp");
const humidity = document.querySelector("#humidity-div");

searchButton.addEventListener("click", findweatherdetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event){
    if (event.key === "Enter"){
        findweatherdetails();
    }
}

function findweatherdetails() {
    if (searchInput.value === ""){
        
    } else{
        const searchLink = "http://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=" + appkey;
        httpsRequestAsync(searchLink, theRespornse);
    }
}

function theRespornse(response) {
    const jsonObject = JSON.parse(response);
    cityname.innerHTML = jsonObject.name;
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperaturn.innerHTML = parseInt(jsonObject.main.temp -273)+"°";

}

function httpsRequestAsync(url, callback) {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            callback(httpRequest.responseText);
        }
    }
    httpRequest.open("GET", url, true);
    httpRequest.send();
}