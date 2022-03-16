//!   JavaScript

function myFunction() {
  var x = document.getElementById("myTopNav");
  if (x.className === "topNav") {
      x.className += " responsive";
  } else {
      x.className = "topNav";
  }
}

let starWars = document.getElementById("starwars");

starWars.addEventListener("click", getApi);

function getApi() {
    axios.get("https://swapi.dev/api/people/").then((response) => {
        console.log(response.data.results);
        for (let x = 0; x < response.data.results.length; x++) {
            let characterContainer = document.getElementById(
                "returnData-starWars"
            );

            let nameTitle = document.createElement("h2");
            let name = document.createElement("p");
            let heightTitle = document.createElement("h2");
            let height = document.createElement("p");
            let birth_yearTitle = document.createElement("h2");
            let birth_year = document.createElement("p");
            let genderTitle = document.createElement("h2");
            let gender = document.createElement("p");
            let hr = document.createElement("hr");

            nameTitle.innerText = "Character Name";
            nameTitle.style.textDecorationLine = "underLine";
            name.innerText = response.data.results[x].name;
            heightTitle.innerText = "Height";
            heightTitle.style.textDecorationLine = "underLine";
            height.innerText = response.data.results[x].height;
            birth_yearTitle.innerText = "Birth Year";
            birth_yearTitle.style.textDecorationLine = "underLine";
            birth_year.innerText = response.data.results[x].birth_year;
            genderTitle.innerText = "Gender";
            genderTitle.style.textDecorationLine = "underLine";
            gender.innerText = response.data.results[x].gender;

            characterContainer.appendChild(nameTitle);
            characterContainer.appendChild(name);
            characterContainer.appendChild(heightTitle);
            characterContainer.appendChild(height);
            characterContainer.appendChild(birth_yearTitle);
            characterContainer.appendChild(birth_year);
            characterContainer.appendChild(genderTitle);
            characterContainer.appendChild(gender);
            characterContainer.appendChild(hr);
        }
    });
}
