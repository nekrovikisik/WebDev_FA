var result;
var first_number = Number(prompt("Введите первое число:"));
var second_number = Number(prompt("Введите второе число:"));
var button_type = prompt("Введите операцию - доступны '+', '-', '*', '/'");
switch (button_type) {
    case '+':
        result = first_number + second_number;
        break;
    case '-':
        result = first_number - second_number;
        break;
    case '*':
        result = first_number * second_number;
        break;
    case '/':
        result = first_number / second_number;
        break;
}
alert(`${first_number} ${button_type} ${second_number} = ${result}`);
