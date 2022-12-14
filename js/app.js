function productManage(product, price, productChanger) {
    const phoneInput = document.getElementById(product + '-number');
    let phoneInputAmount = phoneInput.value;
    if (productChanger) {
        phoneInputAmount = parseInt(phoneInputAmount) + 1;
    } else if(phoneInputAmount > 0) {
        phoneInputAmount = parseInt(phoneInputAmount) - 1;
    }
    phoneInput.value = phoneInputAmount;
    const productUpdate = document.getElementById(product + '-total');
    productUpdate.innerText = phoneInputAmount * price;

    calculateTotal()
}

function productQuantityHandler(product) {
    const quantity = document.getElementById(product+ '-number');
    const amountText = quantity.value;
    const amount = parseInt(amountText);
    return amount;
}

function calculateTotal() {
    const phoneTotal = productQuantityHandler('phone') * 1219;
    const caseTotal = productQuantityHandler('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    // set in html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}

// Phone Price Handle
document.getElementById('phone-plus').addEventListener('click', function () {
    productManage('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    productManage('phone', 1219, false)
})

// Phone Case Handle
document.getElementById('case-plus').addEventListener('click', function () {
    productManage('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function () {
    productManage('case', 59, false)
})