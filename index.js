let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", ()=>{
    console.log("button pressed")
    sendApiRequest()
})

async function getApiRequest(){
    let API_KEY = "NzHHmzbDy1Hqg4yiVJpZrPCcVd42AvfcEnZEMpOd"
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

function ApiData(data){
    document.querySelector("#content").innerHTML += data.explanation
    document.querySelector("#content").innerHTML += `<img src="${data.url}">`
}