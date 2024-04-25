const expenseForm = document.querySelector("#expenseForm");
const expensesArray = [];

expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const placeInput = document.querySelector("#placeInput");
    const dateInput = document.querySelector("#dateInput");
    const amountInput = document.querySelector("#amountInput");

    const newExpense = {
        place: placeInput.value,
        date: dateInput.value,
        amount: amountInput.value,
        id: 0,
    };



    if (placeInput.value === "" || dateInput.value === "" || amountInput.value === "") {
        alert("Please fill all required fields");
    } else {
        expensesArray.push(newExpense);
        console.log(expensesArray);
        showExpenses();
    }

    placeInput.value = "";
    dateInput.value = "";
    amountInput.value = "";
})

function showExpenses() {
    const expenseTableBody = document.querySelector("#expenseTableBody");
    expenseTableBody.innerHTML = "";

    expensesArray.forEach((expense, index) => {

        expense.id = index;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList = "delete-button";
        deleteButton.addEventListener("click", () => {
            deleteExpense(expense.id);
        });

        const deleteButtonCell = document.createElement("td");
        deleteButtonCell.appendChild(deleteButton);

        const tr = document.createElement("tr");

        for (const key in expense) {

            if (key !== "id") {
                const dataCell = document.createElement("td");
                dataCell.innerHTML = expense[key];
                tr.appendChild(dataCell);
            }

        }


        tr.appendChild(deleteButtonCell);
        expenseTableBody.appendChild(tr);
    })
}

function deleteExpense(id) {
    expensesArray.splice(id, 1);
    showExpenses();
}