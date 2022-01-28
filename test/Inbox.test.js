const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

// Web3 accounts are asynchronous, so need to use async await
let accounts;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
});

describe('Inbox', () => {
  it('deploys a contract', () => {});
});

/////////////////////////////////////////

// class Car {
//   park() {
//     return 'stopped';
//   }

//   drive() {
//     return 'vroom';
//   }
// }

// Car values will change so we need to use let not const and then use beforeEach to reset the values
// let car;

// beforeEach(() => {
//   car = new Car();
// });

// describe('Car', () => {
//   it('can park', () => {
//     const car = new Car();
//     assert.equal(car.park(), 'stopped');
//   });

//   it('can drive', () => {
//     const car = new Car();
//     assert.equal(car.drive(), 'vroom');
//   });
// });
