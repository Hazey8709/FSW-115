//!   JavaScript  Page

function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topNav") {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}

let pokemon = document.getElementById("pokemon");

pokemon.addEventListener("click", getApi);

function getApi() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
        console.log(response.data.results);
        for (let x = 0; x < response.data.results.length; x++) {
            let characterContainer = document.getElementById("returnData");

            let nameTitle = document.createElement("li");
            let name = document.createElement("ol");
            let urlTitle = document.createElement("ol");
            let url = document.createElement("ol");
            let hr = document.createElement("hr");
            let br = document.createElement("br");

            nameTitle.innerText = "Pokemon Name ";
            nameTitle.style.fontSize = "28px";
            nameTitle.style.fontWeight = "bold";
            nameTitle.style.textDecorationLine = "underLine";
            name.innerText = response.data.results[x].name;
            urlTitle.innerText = "URL ";
            urlTitle.style.fontSize = "24px";
            urlTitle.style.fontWeight = "bold";
            urlTitle.style.textDecorationLine = "underLine";
            url.innerText = response.data.results[x].url;

            characterContainer.appendChild(nameTitle);
            characterContainer.appendChild(name);
            characterContainer.appendChild(urlTitle);
            characterContainer.appendChild(url);
            characterContainer.appendChild(hr);
            characterContainer.appendChild(br);
        }
    });
}
