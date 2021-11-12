//1 Напишите условие где age от 14 до 90 включительно
// let age = 90
// if (age < 90 || age >= 14) {
//     console.log(age)
// }

//2 Напишите условие где age не в диапазоне от 14 до 90 включительно

// let age = 91
// if (age > 90 || age < 14 ) {
//     console.log(age)
// }

// if (!(age >= 14) || !(age <= 90)  ) {
//     console.log(age)
// } 

//3
// let a = 5
// let b = 1
// let result = (a + b > 4) ? "malo" : "mnogo";
// console.log(result)

//4
// let login = 'Cотрудник';
// let message = (login == 'Cотрудник') ? "привет" : (login == 'Директор') ? "здравствуйте" : (login == '') ? "нет логина" : '';
// console.log(message)

//5
// let str = prompt('Kto tam?');
// console.log(str);

// const declined  = 'Отменено';

// switch (str) {
//     case null:
//         alert(declined);
//         break;
//     case 'Админ':
//         let password = prompt('Password: ');
//         switch (password) {
//             case null:
//                 alert(declined);
//                 break;
//             case 'Я главный':
//                 alert('Здравсвуйте');
//                 break;
//             default:
//                 alert('Неверный пароль');
//         }
//         break;
//     default:
//         alert('Я вас не знаю');
// }

//6

// let brouser = ''

// if (brouser == 'edge') {
//     console.log('edge')
// } else if (brouser == 'chrome' || brouser == 'firefox' || brouser == 'opera') {
//     console.log('to')
// } else {
//     console.log('we hope that this page looks ok')
// }

//7

// const number = +prompt('Введите число между 0 и 3', '')
// switch (number) {
//     case (0):
//         alert('0')
//         break;
//     case (1):
//         alert('1')
//     break;
//     case (2):
//         alert('2')
//     break;
//     case (3):
//         alert('3')
//         break;
// }

//8
// let day = 2;
// if (day >= 1 && day < 11) {
//     console.log('Первая декада');
// } else if (day >= 11 && day < 21) {
//     console.log('Вторая декада');
// } else if (day >= 21 && day <= 31) {
//     console.log('Третья декада');
// } else {
//     console.log('false')
// }

//9

// let month = 12;
// if (month >= 3 && month < 6) {
//   console.log('Весна');
// } else if (month >= 6 && month < 9) {
//   console.log('Лето');
// } else if (month >= 9 && month < 12) {
//   console.log('Осень');
// } else if (month == 1 || month == 2 || month == 12) {
//   console.log('Зима');
// } else {
//   console.log('false')
// }

//10
// let min = 45;
// if (min >= 0 && min <= 14) {
// 	console.log('В первую четверть.');
// }else if (min >= 15 && min <= 30) {
// 	console.log('Во вторую четверть.');
// }else if (min >= 31 && min <= 45) {
// 	console.log('В третью четверть.');
// }else if (min >= 46 && min <= 59) {
// 	console.log('В четвертую четверть.');
// }else {
//   console.log('false')
// }

//11
// let age = 16
// if (age >= 18) {
//     console.log("Совершенолетний")
// } else {
//     console.log("не совершенолетний")
// }

//12

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

//13

// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }

//14

// let num;
// do {
//     num = prompt("enter > 100", 0);
// } while (num <= 100 && num);

//15

// for (let n = 1000, num = 0; n > 50; num++) {
//     n /= 2;
//     console.log(n);
// }