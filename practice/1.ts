// //Variables and types

// const baseUrl: string = 'https://www.saucedemo.com/';   //cant be reassigned
// let retrycount: number = 0;    //can be reassigned

// const isHeadless = true;    //TS infers boolean
// const browsers: String[] = ['chromium','firefox'];  //array of strings

// console.log(baseUrl, retryCount, isHeadless, browsers);


// //Interfaces

// interface User{
//     username: string;
//     password:string;
//     expectedError?:string;   //? means optional
// }

// const lockedUser: User =
// {
//     username: 'locked_out_user',
//     password: 'secret_sauce',
//     expectedError: 'locked out',
// };

// //Functions and arrow functions

// function buildUrl(path: string): string
// {
//     return baseUrl + path;
// }

// const buildUrlArrow = (path: string): string => baseUrl + path;
//  console.log(buildUrl('inventory.html'));


//  //async/await and Promises

//  function wait(ms:number):Promise<void>
//  {
//     return new Promise(resolve => setTimeout(resolve, ms));
//  }

//  async function demo()
//  {
//     console.log('1.clicking login...');
//     await wait(1000);
//     console.log('2.Page loaded');
//  }

//  demo();

//  //classes

//  class LoginHelper
//  {
//     private url: string;
    
//     constructor(url:string)
//     {
//         this.url =url;
//     }
//     describe(user: User):string
//     {
//      return `Logging in ${user.username}at ${this.url}`;
//     }
//  }

//  const helper = new LoginHelper(baseUrl);
//  console.log(helper.describe(lockedUser));

//  //export and import

//  //in file A
//  export const users = {...};

//  //in file B
//  import { users } from '../test-data/users';

const user: string = 'standard_user';
const timeout:number = 5000;
const headless: boolean = true;
const browsers: string[] = ['chromium','firefox'];

function add(a: number,b: number): number
{
    return a+ b;
}

console.log(user, timeout, headless, browsers);
console.log(add(2,3));