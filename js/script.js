function decreaseTurtles() {
    if (document.getElementById('amountTurtles').value != 0) {
        document.getElementById('amountTurtles').value = document.getElementById('amountTurtles').value - 1;
    } else {
        document.getElementById('amountTurtles').value = 0;
    }
    updateTurtles();
    total();
}

function decreaseCats() {
    if (document.getElementById('amountCats').value != 0) {
        document.getElementById('amountCats').value = document.getElementById('amountCats').value - 1;
    } else {
        document.getElementById('amountCats').value = 0;
    }
    updateCats();
    total();
}

function decreaseSquirrels() {
    if (document.getElementById('amountSquirrels').value != 0) {
        document.getElementById('amountSquirrels').value = document.getElementById('amountSquirrels').value - 1;
    } else {
        document.getElementById('amountSquirrels').value = 0;
    }
    updateSquirrels();
    total();
}

function decreaseMonkeys() {
    if (document.getElementById('amountMonkeys').value != 0) {
        document.getElementById('amountMonkeys').value = document.getElementById('amountMonkeys').value - 1;
    } else {
        document.getElementById('amountMonkeys').value = 0;
    }
    updateMonkeys();
    total();
}

function increaseTurtles() {
    document.getElementById('amountTurtles').value = parseInt(document.getElementById('amountTurtles').value) + 1;
    updateTurtles();
    total();
}

function increaseCats() {
    document.getElementById('amountCats').value = parseInt(document.getElementById('amountCats').value) + 1;
    updateCats();
    total();
}

function increaseSquirrels() {
    document.getElementById('amountSquirrels').value = parseInt(document.getElementById('amountSquirrels').value) + 1;
    updateSquirrels();
    total();
}

function increaseMonkeys() {
    document.getElementById('amountMonkeys').value = parseInt(document.getElementById('amountMonkeys').value) + 1;
    updateMonkeys();
    total();
}

function updateTurtles() {
    document.getElementById('summaryTurtles').value = document.getElementById('amountTurtles').value;
}

function updateCats() {
    document.getElementById('summaryCats').value = document.getElementById('amountCats').value;
}

function updateSquirrels() {
    document.getElementById('summarySquirrels').value = document.getElementById('amountSquirrels').value;
}

function updateMonkeys() {
    document.getElementById('summaryMonkeys').value = document.getElementById('amountMonkeys').value;
}

function updateAmountTurtles() {
    document.getElementById('amountTurtles').value = document.getElementById('summaryTurtles').value;
}

function updateAmountCats() {
    document.getElementById('amountCats').value = document.getElementById('summaryCats').value;
}

function updateAmountSquirrels() {
    document.getElementById('amountSquirrels').value = document.getElementById('summarySquirrels').value;
}

function updateAmountMonkeys() {
    document.getElementById('amountMonkeys').value = document.getElementById('summaryMonkeys').value;
}

function decreaseSummaryTurtles() {
    if (document.getElementById('summaryTurtles').value != 0) {
        document.getElementById('summaryTurtles').value = document.getElementById('summaryTurtles').value - 1;
    } else {
        document.getElementById('summaryTurtles').value = 0;
    }
    updateAmountTurtles();
    total();
}

function decreaseSummaryCats() {
    if (document.getElementById('summaryCats').value != 0) {
        document.getElementById('summaryCats').value = document.getElementById('summaryCats').value - 1;
    } else {
        document.getElementById('summaryCats').value = 0;
    }
    updateAmountCats();
    total();
}

function decreaseSummarySquirrels() {
    if (document.getElementById('summarySquirrels').value != 0) {
        document.getElementById('summarySquirrels').value = document.getElementById('summarySquirrels').value - 1;
    } else {
        document.getElementById('summarySquirrels').value = 0;
    }
    updateAmountSquirrels();
    total();
}

function decreaseSummaryMonkeys() {
    if (document.getElementById('summaryMonkeys').value != 0) {
        document.getElementById('summaryMonkeys').value = document.getElementById('summaryMonkeys').value - 1;
    } else {
        document.getElementById('summaryMonkeys').value = 0;
    }
    updateAmountMonkeys();
    total();
}

function increaseSummaryTurtles() {
    document.getElementById('summaryTurtles').value = parseInt(document.getElementById('summaryTurtles').value) + 1;
    updateAmountTurtles();
    total();
}

function increaseSummaryCats() {
    document.getElementById('summaryCats').value = parseInt(document.getElementById('summaryCats').value) + 1;
    updateAmountCats();
    total();
}

function increaseSummarySquirrels() {
    document.getElementById('summarySquirrels').value = parseInt(document.getElementById('summarySquirrels').value) + 1;
    updateAmountSquirrels();
    total();
}

function increaseSummaryMonkeys() {
    document.getElementById('summaryMonkeys').value = parseInt(document.getElementById('summaryMonkeys').value) + 1;
    updateAmountMonkeys();
    total();
}

totalTurtleCost = 0;
totalCatCost = 0;
totalSquirrelCost = 0;
totalMonkeyCost = 0;
totalCost = 0;

function total() {
    totalTurtleCost = parseInt(document.getElementById('amountTurtles').value) * 50;
    totalCatCost = parseInt(document.getElementById('amountCats').value) * 70;
    totalSquirrelCost = parseInt(document.getElementById('amountSquirrels').value) * 40;
    totalMonkeyCost = parseInt(document.getElementById('amountMonkeys').value) * 80;
    totalCost = totalTurtleCost + totalCatCost + totalSquirrelCost + totalMonkeyCost;
    document.getElementById('total').innerHTML = "R " + totalCost;
}
