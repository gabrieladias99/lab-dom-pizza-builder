/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(($pep) => {
    if (state.pepperonni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mushroomunit) => {
    if (state.mushrooms) {
      mushroomunit.style.visibility = 'visible';
    } else {
      mushroomunit.style.visibility = 'hidden';
    }
  });
}


function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(($greenpepper) => {
    if (state.greenPeppers) {
      $greenpepper.style.visibility = 'visible';
    } else {
      $greenpepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.setAttribute('class', 'sauce sauce-white');
  } else {
    sauce.setAttribute('class', 'sauce');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');

  if (state.glutenFreeCrust) {
    crust.setAttribute('class', 'crust crust-gluten-free');
  } else {
    crust.setAttribute('class', 'crust');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btnPeperonni = document.querySelector('.btn-pepperonni');
  const btnMushrooms = document.querySelector('.btn-mushrooms');
  const btnGreenPeppers = document.querySelector('.btn-green-peppers');
  const btnSauce = document.querySelector('.btn-sauce');
  const btnCrust = document.querySelector('.btn-crust');
  document.querySelectorAll('.btn').forEach(e => e.classList.remove('active'))

  if (state.pepperonni) {
    btnPeperonni.setAttribute('class', 'btn btn-pepperonni active');
  } 
  
  if (state.mushrooms) {
    btnMushrooms.setAttribute('class', 'btn btn-mushrooms active');
  } 
  if (state.greenPeppers) {
    btnGreenPeppers.setAttribute('class', 'btn btn-green-peppers active');
  } 
  if (state.whiteSauce) {
    btnSauce.setAttribute('class', 'btn btn-sauce active');
  } 
  if (state.glutenFreeCrust) {
    btnCrust.setAttribute('class', 'btn btn-crust active');
  }
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  /* state = {
    pepperonni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: false,
    glutenFreeCrust: false
  }
  */
  let priceUl = document.querySelector('.panel.price ul');
  let totalprice = 10

  priceUl.innerHTML = '';
  

  for (let key in state) {
    if (state[key]) {
      priceUl.innerHTML += `<li> $ ${ingredients[key].price} ${ingredients[key].name}</li>`
      totalprice += ingredients[key].price
    }
  }

  document.querySelector('strong').innerHTML = `$ ${totalprice}`;

};
renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};