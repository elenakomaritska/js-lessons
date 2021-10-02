// 1 Получить верное значение

let numOne = Math.round(1.005 * 100)/100;

console.log(numOne)

let numTwo = Math.ceil(1.005 * 100)/100;

console.log(numTwo)

let numThree = Math.round((1.005 + Number.EPSILON) * 100)/100;

console.log(numThree)

//2

let value = '135.58px'

console.log(parseFloat(value))

//3

let value2 = 58 - 'Фрилансер'

if (isNaN(value2)) {
    console.log('Результат выражени Nan')
}

//4 найти максимальное число 10 58 39 -150 0

console.log(Math.max(10,58,39,-150,0))

//5 округлить число 58.858 до 58

let num = 58.858;
console.log(Math.floor(num));

//6 получить Привет я фрилансер

let fls = 'фрилансер'
let text = `Привет! я ${fls}`
console.log(text)

//7 символ "н" строки

let fls2 = 'фрилансер'

console.log(fls2[5])

//Верно ли выражение 
//ожидаемый результат 579
//нет
let text2 = 123 + '456'
let number = 123 + parseFloat('456')
console.log(text2)
console.log(number)


//Вехний регистр

let fls3 = 'фрилансер'
console.log(fls3.toUpperCase())

//Получить подстроку лан

console.log(fls3.slice(3, 6))

//Верно ли выражение

let fls4 = 'фрилансер'
console.log(fls4.includes('лан', 4));
//нет надо так
console.log(fls4.includes('лан', 3));