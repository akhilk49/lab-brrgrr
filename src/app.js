// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  let tomato = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  let onion = document.querySelector("#onion");
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

// Event listeners for ingredient buttons
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

// Challenge 1 - Add/Remove the class 'active' to the buttons based on state
function renderButtons() {
  let patty = document.querySelector(".btn-patty");
  if (state.Patty) {
    patty.classList.add("active")
  } else {
    patty.classList.remove("active")
  }
  let cheese = document.querySelector(".btn-cheese");
  if (state.Cheese) {
    cheese.classList.add("active")
  } else {
    cheese.classList.remove("active")
  }
  let tomato = document.querySelector(".btn-tomatoes");
  if (state.Tomatoes) {
    tomato.classList.add("active")
  } else {
    tomato.classList.remove("active")
  }
  let onion = document.querySelector(".btn-onions");
  if (state.Onions) {
    onion.classList.add("active")
  } else {
    onion.classList.remove("active")
  }
  let lettuce = document.querySelector(".btn-lettuce");
  if (state.Lettuce) {
    lettuce.classList.add("active")
  } else {
    lettuce.classList.remove("active")
  }
}

// Challenge 2 - Render only the items selected in the ingredients board based on the state
var items = document.getElementsByClassName("items")
function renderIngredientsBoard() {
  if (state.Patty) {
    items[0].textContent = "patty"
  } else {
    items[0].textContent = ""
  }
  if (state.Cheese) {
    items[1].textContent = "cheese"
  } else {
    items[1].textContent = ""
  }
  if (state.Tomatoes) {
    items[2].textContent = "tomato"
  } else {
    items[2].textContent = ""
  }
  if (state.Onions) {
    items[3].textContent = "onion"
  } else {
    items[3].textContent = ""
  }
  if (state.Lettuce) {
    items[4].textContent = "lettuce"
  } else {
    items[4].textContent = ""
  }
}

// Judgement 1 - Calculate and display the price
function renderPrice() {
  let totalPrice = wholeWheatBun;
  for (let ingredient in state) {
    if (state[ingredient]) {
      totalPrice += ingredients[ingredient];
    }
  }

  // Display the calculated price
  document.querySelector(".price-details").textContent = `INR ${totalPrice}`;
}

// ... (existing code)
