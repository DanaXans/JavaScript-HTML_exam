//кнопка добавления нового элемента
let addButton = document.getElementById('add');
//input для ввода имени и значения
let input_name_value = document.getElementById('input_name_value');
//кнопка "удалить" элемент
let deleteButton = document.getElementById('delete');
//поле для вывода элементов
let output = document.getElementById('output');

//массив для хранения добавляемых данных
let arr = [];

//функция отрисовывает элементы массива и добавляет/обновляет в блок output
function render() {
    //очищает контейнер, чтобы не было одинаковых элементов
    output.innerHTML = '';

    //вытягиваем и проходимся по каждому элементу массива
    for (const elem of arr) {
        //создаем чекбоксы
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('checkboxes');
        //создаем label-обертку для элементов чекбокс и текста
        const label = document.createElement('label');
        label.classList.add('element')

        //создаем параграф с текстом name=value
        const paragraph = document.createElement('p');
        paragraph.innerText = `${elem.name}=${elem.value}`;
        //в label-обертку добавляем текст и чекбокс
        label.append(checkbox, paragraph);
        //добавляем в output-контейнер обертку
        output.append(label);
    }
}

//кнопке "добавить" даем обработчик, "click"
addButton.addEventListener('click', () => {
    //присваиваем содержимое input переменной
    const value = input_name_value.value;
    // Разделяем строку по символу "=" на массив [name, value]
    let textParts = value.split("=");
    //Извлекаем ключ и значение из массива ?.
    // Помогает избежать ошибки в случае, если отсутствуют элементы в массиве
    let keyTxt = textParts[0]?.trim();
    let valueTxt = textParts[1]?.trim();

    //проверяем, подходит ли элемент по шаблону и не является ли NaN или undefined
    if (!value.match(/^\s*([a-z-A-Z-а-я-А-Я-0-9]+)\s*=\s*([a-z-A-Z-а-я-А-Я-0-9]+)\s*$/) || NaN || undefined) {
        throw new Error('invalid input value');
    } else {
        //создаем обьект с ключом и значением
        let template = {name: `${keyTxt}`, value: `${valueTxt}`};
        //добавляем обьект в массив arr
        arr.push(template);
    }
    //вызываем функцию отрисовки "render"
    render();
});

//кнопке "удалить" добавляем обработчик
deleteButton.addEventListener('click', () => {
    //получаем все отрисованные элементы
    const elements = document.querySelectorAll('.element');

    //при нажатии на кнопку "delete" остаются только те элементы массива,
    // чекбокс у которых не отмечен!
    arr = arr.filter((item, index) => {
        //находи чекбокс внутри DOM-элемента
        const checkbox = elements[index].querySelector('input');
        //если чекбокс не отмечен - элемент остается в массиве
        return !checkbox.checked;
    })
    render();
});

//находим среди DOM-элементов кнопку сортировки по имени
let sortByName = document.getElementById('sort_by_name');
//кнопке "отсортировать по имени" добавляем обработчик
sortByName.addEventListener('click', () => {
    //сортируем элементы по длине строки name в порядке возрастания
    arr.sort((a, b) => a.name.length - b.name.length);
    render();
});

//находим среди DOM-элементов кнопку сортировки по значению
let sortByValue = document.getElementById('sort_by_value');
//кнопке "отсортировать по значению" добавляем обработчик
sortByValue.addEventListener('click', () => {
    //сортируем элементы по длине строки value в порядке возрастания
    arr.sort((a, b) => a.value.length - b.value.length);
    render();
});
