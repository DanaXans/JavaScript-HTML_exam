let addButton = document.getElementById('add');
let input_name_value = document.getElementById('input_name_value');
let deleteButton = document.getElementById('delete')
let output = document.getElementById('output');

let arr = [];

function render() {
    output.innerHTML = '';

    for (const elem of arr) {
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', 'checkboxes')
        const label = document.createElement('label');
        label.classList.add('element')

        const paragraph = document.createElement('p');
        paragraph.innerText = `${elem.name}=${elem.value}`;
        output.append(label);
        label.append(checkbox, paragraph);
    }
}

addButton.addEventListener('click', () => {
    const value = input_name_value.value;
    let textParts = value.split("=");
    let keyTxt = textParts[0]?.trim();
    let valueTxt = textParts[1]?.trim();

    if (!value.match(/^\s*([a-z-A-Z-а-я-А-Я-0-9]+)\s*=\s*([a-z-A-Z-а-я-А-Я-0-9]+)\s*$/) || NaN || undefined) {
        throw new Error('invalid input value');
    } else {
        let template = {name: `${keyTxt}`, value: `${valueTxt}`};
        arr.push(template);
    }
    render();
});

//При нажатии кнопки «Удалить» все выбранные элементы в списке будут удалены.
deleteButton.addEventListener('click', () => {
  const elements=document.querySelectorAll('.element');

  arr=arr.filter((item,index)=>{
      const checkbox=elements[index].querySelector('input');
      return !checkbox.checked;
  })
    render();
});

//При нажатии кнопки «Сортировать по имени» список будет отсортирован по имени в порядке возрастания.
let sortByName = document.getElementById('sort_by_name');
sortByName.addEventListener('click', () => {
    arr.sort((a, b) => a.name.length - b.name.length);
    render();
});

//При нажатии кнопки «Сортировать по значению» список будет отсортирован по значению в порядке возрастания.
let sortByValue = document.getElementById('sort_by_value');
sortByValue.addEventListener('click', () => {
    arr.sort((a, b) => a.value.length - b.value.length);
    render();
});
