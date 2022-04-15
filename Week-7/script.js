//!   JavaScript  Page

const getItems = () => {
    axios
        .get("http://api.bryanuniversity.edu/<jordan-fortin>/list/")
        .then((res) => {
            console.log(res);
            displayTodo(res.data);
        })
        .catch((err) => console.log(err));
};
getItems();

const displayTodo = (todos) => {
    const todoContainer = document.getElementById("todoContainer");
    todoContainer.innerHTML = "";

    todos.forEach((todo) => {
        console.log(todo);
        let todoCard = document.createElement("div");
        todoCard.classList.add("todo-card");

        let nameHeader = document.createElement("h2");
        nameHeader.style.textAlign = "center";
        nameHeader.textContent = todo.name;

        let description = document.createElement("p");
        description.textContent = "Description: " + todo.description;

        let price = document.createElement("p");
        price.textContent = "Price: " + todo.price;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.id = todo._id;
        deleteBtn.classList.add("delete_btn");
        deleteBtn.addEventListener("click", deleteTodo);

        let taskComplete = document.createElement("button");
        taskComplete.textContent = "";
        todo.isComplete
            ? ((taskComplete.textContent = "Task Incomplete"),
              (taskComplete.style.backgroundColor = "red"),
              (taskComplete.style.color = "black"),
              (taskComplete.style.borderRadius = "5px"),
              (taskComplete.style.fontWeight = "bold"))
            : ((taskComplete.textContent = "Task Complete"),
              (taskComplete.style.backgroundColor = "green"),
              (taskComplete.style.textDecorationLine = "line-through"),
              (taskComplete.style.fontWeight = "bold"),
              (taskComplete.style.borderRadius = "5px"));

        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("edit_btn");

        taskComplete.id = todo._id;
        taskComplete.value = todo.isComplete;
        taskComplete.addEventListener("click", updateTodo);

        todoCard.appendChild(nameHeader);
        todoCard.appendChild(description);
        todoCard.appendChild(price);
        todoCard.appendChild(deleteBtn);
        todoCard.appendChild(taskComplete);
        todoCard.appendChild(editBtn);
        todoContainer.appendChild(todoCard);
    });
};

let todoForm = document.todoform;

const postTodo = (e) => {
    e.preventDefault();

    let nameData = todoForm.title.value;
    let descriptionData = todoForm.description.value;
    let priceData = todoForm.price.value;
    let isCompleteData = todoForm.todoComplete.checked;

    let data = {
        name: nameData,
        description: descriptionData,
        price: priceData,
        isComplete: isCompleteData,
    };

    axios
        .post("http://api.bryanuniversity.edu/<jordan-fortin>/list/", data)
        .then((res) => getItems(res))
        .catch((err) => console.error(err));
};

todoForm.addEventListener("submit", postTodo);

function alertFunction() {
    alert("The form was submitted!");
}

const deleteTodo = (e) => {
    let id = e.target.id;

    axios
        .delete(`http://api.bryanuniversity.edu/<jordan-fortin>/list/${id}`)
        .then((res) => getItems())
        .catch((err) => console.error(err));
};

const updateTodo = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    if (value === "true") {
        value = false;
    } else {
        value = true;
    }

    let data = {
        isComplete: value,
    };

    axios
        .put(`http://api.bryanuniversity.edu/<jordan-fortin>/list/${id}`, data)
        .then((res) => getItems())
        .catch((err) => console.error(err));
};

//!        Pokemon Data           */

let pokemon = document.getElementById("pokemon-btn");

pokemon.addEventListener("click", getApi);

function getApi() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
        console.log(response.data.results);
        for (let x = 0; x < response.data.results.length; x++) {
            let characterList = document.getElementById("pokemonContainer");
            let pokemonContainer = document.createElement("div");
            pokemonContainer.classList.add("div-Container");

            let nameTitle = document.createElement("h4");
            let name = document.createElement("p");

            let urlTitle = document.createElement("h4");
            let url = document.createElement("p");

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

            pokemonContainer.appendChild(nameTitle);
            pokemonContainer.appendChild(name);
            pokemonContainer.appendChild(urlTitle);
            pokemonContainer.appendChild(url);
            pokemonContainer.appendChild(br);

            characterList.appendChild(pokemonContainer);
        }
    });
}
