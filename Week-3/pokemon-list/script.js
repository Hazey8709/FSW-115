// ! JavaScript Page

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
        var items = `
        <li>Name: ${data[i].name}<br />
        URL: ${data[i].url}<br />
        </li><br /><hr />
        `;
        list.innerHTML += items;
    }
}

//  ! bulleted List    ("CreateElement"- textContent)
/*
function showData(data) {
    for (let i = 0; i < data.length; i++) {
        const pokemon = document.createElement("li");
        pokemon.textContent = "Name:" + data[i].name + " " + "URL:"  + data[i].url;
        document.body.appendChild(pokemon);

    }
}
*/
