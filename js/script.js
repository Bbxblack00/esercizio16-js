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

// arrow function
const test8 = x => {
  console.log('test8');

  return x * y;
}

// arrow function
const test9 = (x, y) => {

  console.log('test9');

  return x + y;
}


function miaFun(x, y, ...args) {

  // console.log(x);
  //
  // console.log(y);
  //
  // console.log(args);

  return args;
}

function sum



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

  // res = test7();
  // console.log(res);

  // console.log(this);

  // const btns = $('.myButton');
  // btns.click(function() {

    //$(this).fadeOut();
  //   console.log(this);
  //   console.log('click');
  // });

  const res = miaFun('valx', 'valy', 1, 2, 3, 4);
  console.log(res);

  //reduce

}

// jquery
// non fare più $(document).ready(init); bensì:
$(init);
