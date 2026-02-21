//кнопка додавання нового елемента
let addButton = document.getElementById('add');
//input для введення імені та значення
let input_name_value = document.getElementById('input_name_value');
//кнопка "видалити" елемент
let deleteButton = document.getElementById('delete');
//поле для виведення елементів
let output = document.getElementById('output');

//масив для зберігання даних, що додаються
let arr = [];

//функція малює елементи масиву і додає/оновлює блок output
function render() {
    //очищає контейнер, щоб не було однакових елементів
    output.innerHTML = '';

    //витягуємо та проходимося по кожному елементу масиву
    for (const elem of arr) {
        //Створюємо чекбокси
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('checkboxes');
        //створюємо label-обгортку для елементів чекбокс та тексту
        const label = document.createElement('label');
        label.classList.add('element')

        //Створюємо параграф з текстом name=value
        const paragraph = document.createElement('p');
        paragraph.innerText = `${elem.name}=${elem.value}`;
        //В label-обгортку додаємо текст і чекбокс
        label.append(checkbox, paragraph);
        //додаємо в output-контейнер обгортку
        output.append(label);
    }
}

//кнопці "додати" даємо обробник, "click"
addButton.addEventListener('click', () => {
    //Привласнюємо вміст input змінної
    const value = input_name_value.value;
    // Розділяємо рядок за символом "=" на масив [name, value]
    let textParts = value.split("=");
    //Вилучаємо ключ і значення з масиву?.
    // Допомагає уникнути помилки у разі, якщо відсутні елементи в масиві
    let keyTxt = textParts[0]?.trim();
    let valueTxt = textParts[1]?.trim();

    //перевіряємо, чи підходить елемент за шаблоном і чи не є NaN або undefined
    if (!value.match(/^\s*([a-z-A-Z-а-я-А-Я-0-9]+)\s*=\s*([a-z-A-Z-а-я-А-Я-0-9]+)\s*$/) || NaN || undefined) {
        throw new Error('invalid input value');
    } else {
        //створюємо об'єкт із ключем і значенням
        let template = {name: `${keyTxt}`, value: `${valueTxt}`};
        //додаємо об'єкт у масив arr
        arr.push(template);
    }
    //викликаємо функцію відтворення "render"
    render();
});

//кнопці "видалити" додаємо обробник
deleteButton.addEventListener('click', () => {
    //отримуємо всі відмальовані елементи
    const elements = document.querySelectorAll('.element');

    //при натисканні на кнопку "delete" залишаються лише ті елементи масиву,
    // Чекбокс у яких не відзначений!
    arr = arr.filter((item, index) => {
        //знаходь чекбокс всередині DOM-елемента
        const checkbox = elements[index].querySelector('input');
        //якщо чекбокс не відзначений - елемент залишається у масиві
        return !checkbox.checked;
    })
    render();
});

//знаходимо серед DOM-елементів кнопку сортування на ім'я
let sortByName = document.getElementById('sort_by_name');
//кнопці "відсортувати на ім'я" додаємо обробник
sortByName.addEventListener('click', () => {
    //сортуємо елементи за довжиною рядка name у порядку зростання
    arr.sort((a, b) => a.name.length - b.name.length);
    render();
});

//Знаходимо серед DOM-елементів кнопку сортування за значенням
let sortByValue = document.getElementById('sort_by_value');
//кнопці "відсортувати за значенням" додаємо обробник
sortByValue.addEventListener('click', () => {
    //сортуємо елементи за довжиною рядка value у порядку зростання
    arr.sort((a, b) => a.value.length - b.value.length);
    render();
});
