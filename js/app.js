'use strict';

// done: 1 Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.
// TODO: 2 Replace all object with a single constructor with the ‘new’ keyword.
// TODO: 3 Replace the lists with a table
// TODO: 4 Each location should have a separate render() method that creates and appends its row to the table
// TODO: 5 The header row and footer row are each created in their own stand-alone function

// ! Global Variables + Window into DOM

let shopHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];
// DOM Manipulation Step 1: Window into the DOM
// 1st option: document.getElementById ==> method for grabbing tag by its ID
// 2nd option: document.querySelector ==> first instance of the passed in tag, ID, or class in your HTML
let seattleSection = document.getElementById('seattle');
console.dir(seattleSection);

// ! Helper Function - Utilities
// get from MDN docs
// helper function: a function used by another function to get min and max number
// function randomHourlyCustomers(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }





// ! Object Literals

let seattle = {
  place: 'Seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  cust: [],
  cookies: [],

  setHourlyCustomers: function () {
    for (let i = 0; i < shopHours.length; i++){

      let randomCus = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
      console.log(randomCus);
      this.cust.push(randomCus);
    }
  },

  cookieEachHour: function () {
    this.setHourlyCustomers();
    for (let i = 0; i < shopHours.length; i++) {
      let oneHour = Math.ceil(this.cust[i] * this.averageCookiesPerCustomer);
      console.log(oneHour);
      this.cookies.push(oneHour);
    }
  },

  render () {
    this.setHourlyCustomers();
    this.cookieEachHour();
    const list = document.getElementById('seattle');
    for (let i = 0; i < shopHours.length; i++) {
      let item = document.createElement('li');
      item.textContent = shopHours[i] + ':' + this.cookies[i] + 'cookies';
      list.appendChild(item);
    }
  },
};

// ! Executable Code
// seattle.setHourlyCustomers();
// seattle.render();

// seattle.cust = randomHourlyCustomers(seattle.minHourlyCustomers, seattle.maxHourlyCustomers);
seattle.render();
