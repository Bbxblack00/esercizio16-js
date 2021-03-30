// function test1() {
//   console.log('hello 1');
// }
//
// const test2 = function() {
//   console.console.log('hello 2');
// }
//
// const test3 = function() {
//   console.log('hello 3');
// }
//
// function testManager(test3) {
//   test3();
// }





// arrow function

const test4 = () => true; // arrow function no agrs, only return value


// arrow function
const test5 = x => x * x; // arrow function with argoment, only return value

// arrow funcrion
const test6 = (x, y) => x + y; // arrow function muttiple argoments, only return value

// arrow function
const test7 = () => {   // arrow function no args, with statement

  console.log('test7');

  return -1;
}




function init() {

  // test1();
  // test2();

  // testManager(test3);

  // let res = test4();
  // console.log(res);

  // res = test5();
  // console.log(res);

  // res = test6();
  // console.log(res);

  res = test7();
  console.log(res);
}
