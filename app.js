//saving HTML properties as JS variables
var temp=document.getElementById("temp")
var description=document.getElementById("description")
var city=document.getElementById("city")
var container=document.getElementById("container")
var symbol=document.getElementById("symbol")
var icon=document.getElementById("icon")





//Checking if user's browser has API
if(navigator.geolocation){
    console.log("HAFa")
    //Asks for location, Gets weather of user
    navigator.geolocation.getCurrentPosition(function(position){
        //Fetching API with user location
        fetch(`https://api.weatherbit.io/v2.0/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=17270180ead94b27a3e874f0cdd513ec`)
        .then(function(response){
            //Grabbing JSON out of Response
            console.log("help")
            return response.json()
        })
        .then(function(jsonData){
            //Inserting data into HTML
            icon.src=`https://www.weatherbit.io/static/img/icons/${jsonData.data[0].weather.icon}.png`
            temp.innerHTML=`<h1>${jsonData["data"][0]["temp"]}</h1>`
            description.innerHTML=`<h2>${jsonData.data[0].weather.description}</h2>`
            city.innerHTML=`<h2>${jsonData.data[0].city_name}</h2>`

    })
})
}

//changes between celcius and farenheight on clicked
container.addEventListener("click",function(){
    if(symbol.innerText=="C"){
        symbol.innerText="F"
        temp.firstChild.innerText=temp.firstChild.innerText*1.8+32
    }
    else{
        symbol.innerText="C"
        temp.firstChild.innerText=(temp.firstChild.innerText-32) /1.8
    }
})