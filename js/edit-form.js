window.addEventListener("DOMContentLoaded", () => {
    initFill();
})

window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-edit');
    const container = document.querySelector('.edit-content .container');

    form.addEventListener('submit', e => {
        e.preventDefault();

        // Создаем элемент, который будем показывать вместо формы после ее отправки
        const result = document.createElement('div');
        // Добавляем ему нужный класс и содержимое
        result.classList.add('form-success');
        result.innerText = 'Контакт успешно сохранен';

        // Удаляем не нужную больше форму
        container.removeChild(form);
        // Добавляем на ее место созданный ранее блок
        container.append(result);

    });
})


const contact = {
    firstName: 'Александр',
    lastName: 'Гоппе',
    phone: '+7 977 228 3300',
    "e-mail": 'goppeav@nspk.ru',
    company : "NSPK",
    position: "разработчик"
}

function initFill() {
    document.querySelector(".field #name").value = contact.firstName
    document.querySelector(".field #lname").value = contact.lastName
    document.querySelector(".field #phone").value = contact.phone
    document.querySelector(".field #email").value = contact["e-mail"]
    document.querySelector(".field #compN").value = contact.company
    document.querySelector(".field #jobT").value = contact.position
}

// console.log(contact.firstName + " " + 
// contact.lastName + " " +
// contact.phone + " " +
// contact["e-mail"] + " " +
// contact.company + " " +
// contact.position
// )