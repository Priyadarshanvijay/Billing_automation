let e = document.getElementById('torc');
e.onclick = () => {
    console.log(e.options[e.selectedIndex].text);
    if (e.options[e.selectedIndex].text === 'Client') {
        document.getElementById('client-text').hidden = false;
    }
    else {
        document.getElementById('client-text').hidden = true;
    }
}
let r1 = document.getElementById('r1');
r1.onclick = () => {
    if (r1.checked) {
        document.getElementById('remarks').required = false;
        document.getElementById('travel-section').hidden = true;
        document.getElementById('stay-section').hidden = true;
        document.getElementById('food-section').hidden = false;
    }
}
let r2 = document.getElementById('r2');
r2.onclick = () => {
    if (r2.checked) {
        document.getElementById('remarks').required = false;
        document.getElementById('food-section').hidden = true;
        document.getElementById('stay-section').hidden = true;
        document.getElementById('remark-is-required').hidden = true;
        document.getElementById('travel-section').hidden = false;
    }
}
let r3 = document.getElementById('r3');
r3.onclick = () => {
    if (r3.checked) {
        document.getElementById('remarks').required = false;
        document.getElementById('food-section').hidden = true;
        document.getElementById('travel-section').hidden = true;
        document.getElementById('remark-is-required').hidden = true;
        document.getElementById('stay-section').hidden = false;
    }
}
let r4 = document.getElementById('r4');
r4.onclick = () => {
    if (r4.checked) {
        document.getElementById('remarks').required = true;
        document.getElementById('food-section').hidden = true;
        document.getElementById('travel-section').hidden = true;
        document.getElementById('stay-section').hidden = true;
        document.getElementById('remark-is-required').hidden = false;
    }
}
let billDiv = document.getElementById('bill-details');
let curNoOfBills = 1;
let addBills = document.getElementById('add-bill');
addBills.addEventListener('click', () => {
    curNoOfBills += 1;
    const htmlToAdd = `<div class = "bill-child" id = "bill-${curNoOfBills}"><label>Select bill file (in PDF format) : </label><input type="file" name="bill-${curNoOfBills}-file"><label>Amount:
                </label><input type="text" name="bill-${curNoOfBills}-amount">
                <label>Bill Date: </label><input type="date" name="bill-${curNoOfBills}-date">
                <input type="button" onclick = "removeBill(this.getAttribute('id'))" id="bill-${curNoOfBills}-remove" value="Remove this bill"><br></div>`;
    billDiv.innerHTML += htmlToAdd;            
});