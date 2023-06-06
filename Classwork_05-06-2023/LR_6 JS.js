// 1.	Воспользовавшись методическим указанием реализуйте Калькулятор в виде стрелочных функций.
let pow = (num, arg) => num**arg;
let plus = (num1, num2) => num1+num2;
let minus = (num1, num2) => num1-num2;
let multiply = (num1, num2) => num1*num2;
let divide = (num1, num2) => num1/num2;

// 2.	Используя  Function Expression реализуйте проверку условий тестовых заданий.
var calc_checker = function(a, b, func_name) {
    switch(func_name){
        case 'plus':
                return (a + b)==plus(a, b);
                break;
        case 'minus':
                return (a - b)==minus(a, b);
                break;
        case 'multiply':
                return (a * b)==multiply(a, b);
                break;
        case 'divide':
                return (a / b)==divide(a, b);
                break;
        case 'pow':
                return (a ** b)==pow(a, b);
                break;
      default:
                console.log( "Нет такой функции" );
    }
}
calc_checker(5, 2, 'divide')
// true
calc_checker(5, 2, 'minus')
// true
calc_checker(5, 2, 'plus')
// true
calc_checker(5, 2, 'multiply')

calc_checker(5, 2, 'pow')
// true

// 3.	Реализуйте в виде стрелочной функции функцию, проверяющую вашу фамилию на полиндром.
let check_is_palindrom = (s) => s.toLowerCase()===s.toLowerCase().split('').reverse().join('');
check_is_palindrom('test')
// false
check_is_palindrom('шалаш')
// true

// 4.	Реализуйте в виде стрелочной функции вычисление среднего значения данных в массиве
let get_average = (arr) => arr.reduce((a, b) => a + b)/arr.length;
get_average([1, 2, 3, 4, 5])
// 3

// 5.	В виде стрелочной функции реализуйте функцию, вычисляющую количество дней до нового года.
let get_days_to_NewYear = (dt) => (new Date(dt.getFullYear() + 1, 0, 1) - dt)/(1000*60*60*24);
let now = new Date();
get_days_to_NewYear(now)
// 208.17132422453705

// 6.	Создайте пустую стрелочную функцию возвращает undefined
// let empty_func = () => {};

// 7.	Создайте массив и напишите стрелочные функции для него: суммирование всех элементов, выявить все четные, умножить каждый элемент на 2.
let arr = [1, 2, 3, 4, 5, 6]
let get_sum = (arr) => arr.reduce((a, b) => a + b);
get_sum(arr)
// 21
let get_even = (arr) => arr.filter(el => el % 2 == 0);
get_even(arr)
// 2, 4, 6]
let get_x2 = (arr) => arr.reduce(el => el * 2)
get_x2(arr)
// 32
let get_x2 = (arr) => arr.map(el => el * 2)
get_x2(arr)
// [2, 4, 6, 8, 10, 12]

// 8.	Создайте массив с e-mail. Организуйте фильтр на странице html по названию почты.
let filter_mail = (arr, client) => arr.filter(el => el.split('@')[1].toLowerCase() == client.toLowerCase());
filter_mail(['v29834@mail.ru', '2783@gmail.com'], 'mail.Ru')
// ['v29834@mail.ru']
