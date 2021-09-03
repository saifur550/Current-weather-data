// const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
// const searchTemperature = () => {
//     const city = document.getElementById('city-name').value;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayTemperature(data));
// }

// const setInnerText = (id, text) => {
//     document.getElementById(id).innerText = text;
// }

// const displayTemperature = temperature => {
//     setInnerText('city', temperature.name);
//     setInnerText('temperature', temperature.main.temp);
//     setInnerText('condition', temperature.weather[0].main);
//     // set weather icon
//     const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
//     const imgIcon = document.getElementById('weather-icon');
//     imgIcon.setAttribute('src', url);
// }


const api_key = `666a17dcbbdb7ff7fa79325d26ab2962`;

const btnClick = () =>{
    const location = document.getElementById('location').value;
    location.value = ' ';
    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric `
    // console.log(apiLink);
    fetch(apiLink)
    .then(res => res.json())
    .then( data => displayTemperature(data))

   
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}


const displayTemperature = temp => {
   setInnerText  ('city', temp.name );
   setInnerText  ('temperature', temp.main.temp );
   setInnerText  ('condition', temp.weather[0].main );
//    console.log(temp);
   //set icon 
   const iconUrl = `http://openweathermap.org/img/wn/${temp.weather[0].icon }@2x.png`;
   const iconImg = document.getElementById('icon');
   iconImg.setAttribute ('src', iconUrl)  
}