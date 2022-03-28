//!    JavaScript  Page

function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topNav") {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}

const getLukeData = async () => {
    try {
        const lukeSky = await axios.get(" https://swapi.dev/api/people/1");
        const lukeHomeWorld = await axios.get(lukeSky.data.homeworld);
        const planets = await axios.get("https://swapi.dev/api/planets");

        displayData(lukeSky, lukeHomeWorld, planets);
        //*displayDataHome(lukeHomeWorld);
        //*displayDataPlanets(planets);
    } catch (error) {
        console.log(error);
    }
};

getLukeData();

function displayData(lukeSky, lukeHomeWorld, planets) {
    //!  Luke's Information
    //*console.log(lukeSky);
    let lukeSkyList = document.getElementById("returnDataLuke");
    let lukeSkyCont = document.createElement("div");

    let titleEl = document.createElement("h2");
    titleEl.innerText = "Star Wars Person";
    titleEl.style.textDecorationLine = "underline";
    lukeSkyCont.appendChild(titleEl);

    let nameEl = document.createElement("h4");
    nameEl.innerText = lukeSky.data.name;
    lukeSkyCont.appendChild(nameEl);

    let massEl = document.createElement("p");
    massEl.innerText = "Mass:" + " " + lukeSky.data.mass;
    lukeSkyCont.appendChild(massEl);

    let heightEl = document.createElement("p");
    heightEl.innerText = "Height:" + " " + lukeSky.data.height;
    lukeSkyCont.appendChild(heightEl);
    lukeSkyList.appendChild(lukeSkyCont);

    //! Luke's Home World
    //*console.log(lukeHomeWorld);
    let homeWorldList = document.getElementById("returnDataHome");
    let homeWorldCont = document.createElement("div");

    let homeTitleEl = document.createElement("h2");
    homeTitleEl.innerText = "Luke's Home World";
    homeTitleEl.style.textDecorationLine = "underline";
    homeWorldCont.appendChild(homeTitleEl);

    let homeWorldEl = document.createElement("h4");
    homeWorldEl.innerText = "Home World Name:" + " " + lukeHomeWorld.data.name;
    homeWorldCont.appendChild(homeWorldEl);

    let terrainEl = document.createElement("p");
    terrainEl.innerText = "Terrain:" + " " + lukeHomeWorld.data.terrain;
    homeWorldCont.appendChild(terrainEl);
    homeWorldList.appendChild(homeWorldCont);

    //! Planet's title
    let planetsTitleList = document.getElementById("returnDataPlanets");

    let planetsTitleCont = document.createElement("div");

    let planetsTitle = document.createElement("h2");
    planetsTitle.innerText = "Planet's List & Diameter";
    planetsTitle.style.textDecorationLine = "underline";
    planetsTitleCont.appendChild(planetsTitle);
    planetsTitleList.appendChild(planetsTitleCont);

    //! Planet's List
    //*console.log(planets);
    let planetsList = document.getElementById("returnDataPlanets");

    for (let i = 0; i < planets.data.results.length; i++) {
        let planetsCont = document.createElement("div");

        let nameEl = document.createElement("h4");
        nameEl.innerText = "Planet Name:" + " " + planets.data.results[i].name;
        nameEl.style.fontWeight = "bold";
        planetsCont.appendChild(nameEl);

        let diameterEl = document.createElement("p");
        diameterEl.innerText =
            "Diameter:" + " " + planets.data.results[i].diameter;
        planetsCont.appendChild(diameterEl);
        planetsList.appendChild(planetsCont);
    }
}
