const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status  = document.getElementById('temp_status');
const temp  = document.getElementById('temp');
const day  = document.getElementById('day');
const today_date = document.getElementById('today_date');
// const year = document.getElementById('year')
const unit = '\u00B0C';

let weekday=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let month =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const date = new Date();
day.innerText = weekday[date.getDay()];
today_date.innerText = date.getDate()+" , "+ month[date.getMonth()];



const getInfo = async(event) =>{
    // it prevents the page from realoading
    event.preventDefault();
   let cityVal = cityName.value;
   if(cityVal==""){
    city_name.innerText = `Plz write the name before search`;
   }
   else{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=2a9d48dacdfc50e8a8b846d4362fb423`;
    const response = await fetch(url);
    // json() function will convert the json data in object form
    const data = await response.json();
    const arrdata = [data];
    const ktemp = arrdata[0].main.temp;
    const ctemp=  ktemp - 273.15;

    

temp.innerText = `${Math.floor(ctemp)}${unit}`;
temp_status.innerText = arrdata[0].weather[0].main;


city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`

 

const condition  = arrdata[0].weather[0].main;
// console.log(tempmood)

if(condition=="Clear"){

   }
   else if(condition == "Clouds"){
        temp_status.innerHTML = "<i class='fa-solid fa-cloud fa-beat-fade' style='color: #2e77f5;'></i>"
    console.log(temp_status)
   }
   else if(condition == "Rain"){
    temp_status.innerHTML = "<i class='fa-regular fa-cloud-rain fa-beat-fade' style='color: #4787f5;'></i>"

   }
//   
   else if(condition == "Mist"){
    temp_status.innerHTML="<i class='fa-regular fa-cloud-sun fa-beat-fade' style='color: #e5c41f;'></i>"
   }
}


}

submitBtn.addEventListener('click',getInfo);