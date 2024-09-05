'use strict';

// 1

// let a = prompt('введите стоимость товара');
// let b = prompt('введите кол-во денег');
// if (a > 0 && b > 0) {
//     if (a == b) {
//         alert("покупка совершена");
//     } else if (a > b) {
//         alert(`Для покупки не хватает ${a - b} p`);
//     } else if (a < b) {
//         alert(`Покупка совершена. Ваша сдача ${b - a} p`)
//     }
// } else {
//     alert('неверный формат');
// }

// 2

// let a = prompt('введите число');

// if (a > 0) {
//     alert('1');
// } else if (a < 0) {
//     alert ('-1')
// }else if (a == a){
//     alert ('0')
// }

// 3

// let num1 = +prompt('введите число');
// let num2 = +prompt('введите число');
// let result = (num1 + num2 < 4) ? 'мало' : "много";
// alert(result);

// 4

// let login = prompt('введите логин');
// let message = login == 'сотрудник' ? "привет" :
//     login == 'директор' ? 'здрасьте' :
//         login == '' ? 'нет логина' : '';
// alert(message);

// 5

let login = prompt ('введите логин');
if (login == "админ") {
    let pass = prompt('введите пароль');
    if (pass == 'я главный'){
        alert ('здравствуйте');
    }else if (pass === null || pass === ''){
        alert('отменено');
    }else {
        alert ('неверный пароль');
    }
} else if (login === null || login === ''){
    alert ('отменено')
}else{
    alert ('я вас не знаю');
}

