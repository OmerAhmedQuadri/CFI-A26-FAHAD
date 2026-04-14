
const expInput = document.getElementById('expenseInput')
const amountInput = document.getElementById('amountInput')
const dateInput = document.getElementById('date')
const warning = document.getElementById('warning')
const submitBtn = document.getElementById('submit-btn')
const total = document.getElementById('totalspan')
const list = document.getElementById('list')

let expenseList = JSON.parse(localStorage.getItem('expenselist')) || []

renderlist()

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    addExp()
})

list.addEventListener('click', (event) => {
    event.preventDefault()
    const id = event.target.id
    if (event.target.tagName !== 'BUTTON')
        return
    expenseList = expenseList.filter((exp) => {
        return exp.id != id
    })
    savelist()
    renderlist()
})

function savelist() {
    localStorage.setItem('expenselist', JSON.stringify(expenseList))
}

function renderlist() {
    list.innerHTML = "";
    let amount = 0

    expenseList.forEach((expense) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <div>
                <strong>${expense.expenseName}</strong><br>
                <small>${expense.date}</small>
            </div>
            <span>${expense.amount} rs</span>
            <button id = "${expense.id}">Delete</button>
        `

        list.append(li)
        amount += parseFloat(expense.amount)
    });
    if (expenseList.length === 0) {
        total.innerText = '0'
    }
    total.innerText = amount
}


function addExp() {
    const expense = {
        id: Date.now(),
        expenseName: expInput.value,
        amount: amountInput.value,
        date: dateInput.value
    }

    if (expInput.value == "" ||
        amountInput.value == "" ||
        dateInput.value == "") {
        return
    }

    if (!validateDate(dateInput.value)) return


    expenseList.push(expense)
    savelist()
    renderlist()

    expInput.value = ""
    amountInput.value = ""
    dateInput.value = ""
}

function validateDate(date) {
    const today = new Date().toLocaleDateString();

    if (date > today) {
        warning.classList.remove("hidden");
        return false;
    }

    warning.classList.add("hidden");
    return true;
}