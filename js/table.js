document.addEventListener('DOMContentLoaded', function() {
    var tableBody = document.querySelector('#contacts_table tbody');

    // Проходим по данным и добавляем строки в таблицу
    TableData.forEach(function(item) {
        var row = tableBody.insertRow();
        row.insertCell(0).textContent = item.firstName;
        row.insertCell(1).textContent = item.lastName;
        row.insertCell(2).textContent = item.phone;
    });
    
    var contactsCountSpan = document.querySelector('.contacts_count');

    // Устанавливаем текст в скобках равным длине массива data при загрузке страницы
    contactsCountSpan.textContent = '(' + TableData.length + ' контактов)';
});

const contact1 = {
    lastName: 'Бивнев',
    firstName: 'Хрюн',
    phone: '+7 977 123 4567'
}
const contact2 = {
    firstName: 'Александр',
    lastName: 'Гоппе',
    phone: '+7 977 765 4321'
}
const contact3 = {
    lastName: 'Макотькинс',
    firstName: 'Кошка',
    phone: '+ 7 977 228 3300'
}

const TableData = [contact1, contact2, contact3];