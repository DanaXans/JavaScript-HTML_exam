let addButton = document.getElementById('add');
let input_name = document.getElementById('input_name');
let output = document.getElementById('output');

let arr = [];
let object = {};
//Требуемые функции:
// Пары «имя/значение» необходимо вводить в верхнее текстовое поле. Это текстовое поле
// будет использоваться конечным пользователем для быстрого добавления пар «имя/значение» в список ниже.
// Перед добавлением пары «Имя/Значение» в список необходимо проверить её синтаксис.
// Если синтаксис неверен, добавлять пару «Имя/Значение» не следует.
// Формат записи пары «Имя/Значение» показан ниже:
// <имя> = <значение>

addButton.addEventListener('click', () => {
    const value = input_name.value;
    value.match(/\s([9a-z-A-Z-а-я-А-Я\d]+)\s=\s([a-z-A-Z-а-я-А-Я\d]+)\s/)

    let textParts = value.split("=");
    let keyTxt = textParts[0]?.trim();
    let valueTxt = textParts[1]?.trim();

    let ul = document.createElement('ul');
    if (valueTxt === undefined || null) {
        console.log('error')
    } else {
        let li = document.createElement('li');
        const template = {name: `${keyTxt}`, value: `${valueTxt}`};
        arr.push(template);
        ul.appendChild(li)
        li.innerText += `${keyTxt}=${valueTxt} `;

    }
    output.appendChild(ul);
    console.log(arr);
})

