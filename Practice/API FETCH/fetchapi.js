const url = "https://www.boredapi.com/api/activity";
fetch(url).then((response)=>response.json()).then((data)=>console.log(data)).catch((error)=>console.log(error));