// !    JavaScript Page

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        showData(data.results);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        console.log(xhr.responseText);
    }
};

// !  Ordered List   ("getElementById" - Template Literals )
function showData(data) {
    var list = document.getElementById("myList");

    for (let i = 0; i < data.length; i++) {
        let listCont = document.createElement("li");

        let nameEl = document.createElement("p");
        nameEl.innerHTML = `Name: ${data[i].name}`;
        listCont.appendChild(nameEl);

        let urlEl = document.createElement("p");
        urlEl.innerHTML = `URL: ${data[i].url}`;
        listCont.appendChild(urlEl);

        let hrEl = document.createElement("hr");
        hrEl.classList.add("hr-design");
        listCont.appendChild(hrEl);

        list.appendChild(listCont);
    }
}

//  ! bulleted List    ("CreateElement"- textContent)

// function showData(data) {
//     for (let i = 0; i < data.length; i++) {
//         const pokemon = document.createElement("li");
//         pokemon.textContent = "Name:" + data[i].name + " " + "URL:"  + data[i].url;
//         document.body.appendChild(pokemon);

//     }
// }
