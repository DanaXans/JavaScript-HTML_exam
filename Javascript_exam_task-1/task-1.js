let addButton = document.getElementById('add');
let input_name = document.getElementById('input_name');
let output = document.getElementById('output');
let arr = [];
///////////////////////////////////////////////////////////////

let checkbox;
let label;
let paragraph;

addButton.addEventListener('click', () => {
    const value = input_name.value;
    let textParts = value.split("=");
    let keyTxt = textParts[0]?.trim();
    let valueTxt = textParts[1]?.trim();

    checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'check-input');
    label = document.createElement('label');
    paragraph = document.createElement('p');

    if (!value.match(/^\s*([a-z-A-Z-а-я-А-Я-0-9]+)\s*=\s*([a-z-A-Z-а-я-А-Я-0-9]+)\s*$/) || NaN || undefined) {
        throw new Error('invalid input value');
    } else {
        const template = {name: `${keyTxt}`, value: `${valueTxt}`};
        arr.push(template);
        paragraph.innerText += `${keyTxt}=${valueTxt} `;
        output.append(label);
        label.append(checkbox, paragraph);
    }
    console.log(arr);

})

//При нажатии кнопки «Удалить» все выбранные элементы в списке будут удалены.

let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => {
    let checkbox = document.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
        output.label.delete()
    }
})

//При нажатии кнопки «Сортировать по имени» список будет отсортирован по имени в порядке возрастания.
let sortByName = document.getElementById('sort_by_name');
sortByName.addEventListener('click', () => {
    output.innerHTML = '';
    const sorted = [...arr].sort((a, b) => a.name.length - b.name.length);
    console.log(sorted);

    for (const elem of sorted) {
        checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('class', 'check-input');
        label = document.createElement('label');
        paragraph = document.createElement('p');

        paragraph.innerText += `${elem.name}=${elem.value}`;
        output.append(label);
        label.append(checkbox, paragraph);
    }
})

//При нажатии кнопки «Сортировать по значению» список будет отсортирован по значению в порядке возрастания.
let sortByValue = document.getElementById('sort_by_value');
sortByValue.addEventListener('click', () => {
    output.innerHTML = '';
    const sorted = [...arr].sort((a, b) => a.value.length - b.value.length);
    console.log(sorted);

    for (const elem of sorted) {
        checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('class', 'check-input');
        label = document.createElement('label');
        paragraph = document.createElement('p');

        paragraph.innerText += `${elem.name}=${elem.value}`;
        output.appendChild(label);
        label.append(checkbox, paragraph);
    }
})
