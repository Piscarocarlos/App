
const API_ID = "b5f558462160da78810acd0bb997a9fd";

window.navigator.geolocation.getCurrentPosition((data)=>{
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_ID}`)
    .then((res)=>{
        console.log(res.data);
        $('h2').text(res.data.name)
        $('span').text(res.data.sys.country)
        $('.degre').text(Math.round(res.data.main.temp - 273,15) + "°C")
    })
})