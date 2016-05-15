var APPID="543c9b0117d84d90e32734d5f68585a9";
//var APPID="d2ace650b4df41f6d5flea94fc08da75";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

//window.onload=function()
//{
    /*temp=document.getElementsByClassName("temperature");
    loc=document.getElementsByClassName("location");
    icon=document.getElementsByClassName("climate_bg");
    humidity=document.getElementsByClassName("humidity");
    wind=document.getElementsByClassName("windspeed");
    direction=document.getElementsByClassName("direction");*/





//}
function showlocation(position)
{
    updateByGeo(position.coords.latitute,position.coords.longitute);
}

$(document).ready(function(){

    //setTimeout(getweather,10000);
    var weather={};


   /*weather.loc='delhi';
    weather.wind=5.6;
    weather.humidity='6%';
    weather.direction='R';
    weather.temp='45';
    weather.icon=21;

    update(weather);*/

    if(navigator.geolocation)
        {

            navigator.geolocation.getCurrentPosition(showlocation);

        }
    else
        {
            var key=window.prompt("Cannot configure your geolocation..enter code");
            updateByZip(key);
        }

//    updateByZip(87110);

})

function updateByGeo(lati,long)
{

var url="http://api.openweathermap.org/data/2.5/weather?"+"lat="+lati+"&lon="+long+"&APPID="+APPID;
    request(url);

}



function updateByZip(zip)
{
    console.log("in updateByZip()");
    var url="http://api.openweathermap.org/data/2.5/weather?"+"zip="+zip+"&APPID="+APPID;

    console.log("url="+url);

    request(url);

}


function request(url)
{
    console.log("in request()");
    var xmlHttp=new XMLHttpRequest();

 xmlHttp.onreadystatechange= function()
 {
     if(xmlHttp.readyState==4 && xmlHttp.status==200)
         {
             var weatherData=JSON.parse(xmlHttp.responseText);
             var weather={};

            console.log("in btw the request()"); weather.humidity=weatherData.main.humidity;
             weather.windspeed=weatherData.wind.speed;
             weather.direction=weatherData.wind.deg;
             weather.location=weatherData.name;
             weather.temp=weatherData.main.temp;
             console.log(weather.direction);
             console.log("hello");


             update(weather);

         }

     else
         console.log("unable to get data");

 }

 xmlHttp.open("GET",url,true);
    xmlHttp.send();


}

function update(weather)
{
    console.log("in update()");
    //$(".windspeed").value=weather.wind;
       $(".windspeed").append(weather.windspeed);
    $(".direction").append(weather.direction);
    $(".humidity").append(weather.humidity);
    $(".location").append(weather.location);
$(".temperature").append(weather.temp);
    $(".climate_bg").src="images/"+weather.icon+"svg";

}
