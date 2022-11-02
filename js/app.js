'use strict';

// done: 1 Store the min/max hourly customers,
// TODO: 2 the average cookies per customer, in object properties.
// TODO: 3 Use a method of that object to generate a random number of customers per hour. Objects/Math/random
// TODO: 4 Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
// TODO: 5 Store the results for each location in a separate array… perhaps as a property of the object representing that location.
// TODO: 6Display the values of each array as unordered lists in the browser.
// TODO: 7 Calculating the sum of these hourly totals; your output for each location should look like this:

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



function randomCookie(customersArr, cookiesSold) {
  let cookieAvg = [];

  for (let i = 0; i < customersArr.length; i++) {
    let randomCookie = Math.ceil(customersArr[i] * cookiesSold);
    cookieAvg.push(randomCookie);
  }

  return cookieAvg;
}

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
    }
  },

  render: function () {
    this.cookies = randomCookie(seattle.cust, seattle.avgCookieSale);

    let articleElem = document.createElement('article');
    seattleSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.place;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.place}`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < shopHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = shopHours[i];
      ulElem.appendChild(liElem);
    }
  },
};

// ! Executable Code
// seattle.setHourlyCustomers();
// seattle.render();

// seattle.cust = randomHourlyCustomers(seattle.minHourlyCustomers, seattle.maxHourlyCustomers);
// seattle.render();
