var APPID="543c9b0117d84d90e32734d5f68585a9";
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

$(document).ready(function(){

    //setTimeout(getweather,10000);
    var weather={};


   weather.loc='delhi';
    weather.wind=5.6;
    weather.humidity='6%';
    weather.direction='R';
    weather.temp='45';
    weather.icon=21;

    update(weather);

})

function update(weather)
{
    //$(".windspeed").value=weather.wind;
       $(".windspeed").html()='45 km/h';
    $(".direction").value='n';
    $(".humidity").value='45%';
    $(".location").value='delhi';
$(".temperature").value='46';
    $(".climate_bg").src="images/"+weather.icon+"svg";
}
