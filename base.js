let test1 = document.querySelector("#test1")
let test2 = document.querySelector(".test2")
let APITest = ("https://giphilgolden.github.io/test-api/db.json")
let APIUsers = ("http://localhost:3000/inhabitants")
// type "json-server --watch db.json" in file in terminal to launch localhost:3000
let NewArray = []

    fetch(APIUsers).then(res => res.json(res))
    .then(data =>NewArray.push(data))
    .then(Arr =>test1.innerHTML = NewArray[0][1]["first-name"])

    console.log(NewArray)

    test1.innerHTML = NewArray
