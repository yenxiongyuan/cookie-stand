'use strict';

// done: 1 Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.
// TODO: 2 Replace all object with a single constructor with the ‘new’ keyword.
// TODO: 3 Replace the lists with a table
// TODO: 4 Each location should have a separate render() method that creates and appends its row to the table
// TODO: 5 The header row and footer row are each created in their own stand-alone function

// ! Global Variables + Window into DOM

let shopHours = [
  '6:00am',
  '7:00am',
  '8:00am',
  '9:00am',
  '10:00am',
  '11:00am',
  '12:00pm',
  '1:00pm',
  '2:00pm',
  '3:00pm',
  '4:00pm',
  '5:00pm',
  '6:00pm',
  '7:00pm',
];
// DOM Manipulation Step 1: Window into the DOM
// 1st option: document.getElementById ==> method for grabbing tag by its ID
// 2nd option: document.querySelector ==> first instance of the passed in tag, ID, or class in your HTML
let allStores = [];

let tableElem = document.getElementById('table');
console.dir(tableElem);

let shopForm = document.getElementById('shop-form');

// ! Helper Function - Utilities

// helper function: a function used by another function to get min and max number
// get from MDN docs
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Store.prototype.randomCookies = function () {
  for (let i = 0; i < shopHours.length; i++) {
    let custNum = randomNum(this.minHourlyCustomers, this.maxHourlyCustomers);
    let cookieNum = Math.round(custNum * this.averageCookiesPerCustomer);
    this.total += cookieNum;
    this.cookieNums.push(cookieNum);
  }
};

Store.prototype.render = function () {
  let tableRow = document.createElement('tr');
  tableElem.appendChild(tableRow);
  let city = document.createElement('th');
  city.textContent = this.place;
  tableRow.appendChild(city);

  for (let i = 0; i < this.cookieNums.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = this.cookieNums[i];
    tableRow.appendChild(tableData);
  }
  let totalRow = document.createElement('td');
  totalRow.textContent = this.total;
  tableRow.appendChild(totalRow);
};

function makeHeader() {
  let tableRow = document.createElement('tr');
  tableElem.appendChild(tableRow);
  let firstCell = document.createElement('td');
  tableRow.appendChild(firstCell);
  for (let i = 0; i < shopHours.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = shopHours[i];
    tableRow.appendChild(tableData);
  }
}

function makeFooter() {
  let tableRow = document.createElement('tr');
  tableRow.id='removeTableRow';
  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'Totals';
  tableRow.appendChild(tableHeader);

  let grandTotal = 0;

  for (let i = 0; i < shopHours.length; i++) {
    let hourlyTotal = 0;

    for (let j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].cookieNums[i];
    }

    let tdElement = document.createElement('th');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);

    grandTotal += hourlyTotal;
  }

  let totalElement = document.createElement('th');
  totalElement.textContent = grandTotal;
  tableRow.appendChild(totalElement);

  tableElem.appendChild(tableRow);
}



// ! Constuctor

function Store (place, min, max, avg) {
  this.place = place;
  this.minHourlyCustomers = min;
  this.maxHourlyCustomers = max;
  this.averageCookiesPerCustomer = avg;
  this.total = 0;
  this.cookieNums = [];
  allStores.push(this);
}

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);


function handleSumit(event) {
  event.preventDefault();

  let place = event.target.place.value;
  console.log(place);

  let min = +event.target.min.value;
  console.log(min);

  let max = +event.target.max.value;
  console.log(max);

  let avg = +event.target.avg.value;
  console.log(avg);

  let addStore = new Store(place, min, max, avg);
  let removeTableRow = document.getElementById('removeTableRow');

  removeTableRow.remove();

  let newPlace = allStores[allStores.length - 1];
  newPlace.randomCookies();
  newPlace.render();

  makeFooter();


}

// ! Object Literals



// ! Executable Code


makeHeader();

seattle.randomCookies();
seattle.render();

tokyo.randomCookies();
tokyo.render();

dubai.randomCookies();
dubai.render();

paris.randomCookies();
paris.render();

lima.randomCookies();
lima.render();

makeFooter();

shopForm.addEventListener('submit', handleSumit);