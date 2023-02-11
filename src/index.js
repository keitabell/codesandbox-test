// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
// const name = "keita";
// const age = 24;

// // const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// // console.log(message1);

// const message2 = `わたしの名前は${name}です年齢は${age}です`;
// console.log(message2);

// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2is"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// }

// console.log(func3(10,29));

// const myProfile = {
//   name: "keita",
//   age: 28,
// }

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const {name, age} = myProfile;

// const message2 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message2);

// const myProfile = ['keita', 34];
// const message3 = `watasiha${myProfile[0]}desu,nennreiha${myProfile[1]}desu`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `watasiha${name}desu,nennreiha${age}desu??`;
// console.log(message4);

// const sayHello = (name = "gest") => console.log(`デフォルト${name}`);
// sayHello("keita");

// const arr1 = [1, 3];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];
// const[num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10,20];
// const arr5 = [30,40];

//  const arr6 = [...arr4];
//  arr6[0] = 100;
//  console.log(arr4);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// //console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

//const nameArr = ["dog", "cat", "snake"];
//for (let index = 0; index < nameArr.length; index++ ) {
//    console.log(`${index + 1}番目は${nameArr[index]}です。`);
//  }
// // // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // })
// // console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

//const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) =>{
//   if (name === "dog") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
//   console.log(newNameArr);

// const val1 = 1 > 0 ? 'true' : 'false';
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値いれて';
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? '1oo超え' : 'じゃない';
// }
// console.log(checkSum(99,23));

const flag1 = true;
const flag2 = true;

if (flag1 || flag2) {
  console.log("どちらかtrue");
}

if (flag1 && flag2) {
  console.log("どちらもtrue");
}
