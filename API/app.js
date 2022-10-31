const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/",(req,res)=>{
    const cityName = req.body.cityName;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=880dae23c4bcc9f00319e392c7752be8`;
    https.get(url , response =>{
        response.on("data" , (data)=>{
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            console.log(temp);
            const icon = weatherData.weather[0].icon;
            const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`; 
            res.write(`<h1>The weather is currently ${weatherDescription} </h1>`);
            res.write(`<h1>The temperature of ${cityName} is ${temp} </h1>`);
            res.write(`<img src = ${imageURL} alt = "Weather Image"></img>`);
            res.send();
        });
    });
});

app.listen(8000 , ()=>{
    console.log("Server running on port 8000");
});