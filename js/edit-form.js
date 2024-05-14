window.addEventListener("DOMContentLoaded", () => {
    initFill();
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