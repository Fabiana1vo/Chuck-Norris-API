const title = document.querySelector ("h1")
fetch ("https://api.chucknorris.io/jokes/random").then(response => {


    return response.json()
}).then (data => {
        var chuck = data.value
        title.innerText = chuck


        console.log(chuck)
    })


