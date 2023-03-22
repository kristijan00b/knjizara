let kredit = 0
function payCredit(element) {
    let uplacenIznos = document.querySelector('.credit h3 input').value
    kredit += parseInt(uplacenIznos)
    document.querySelector('.credit h2 span').innerHTML = kredit
}

function addToCart(element) {
    let mainEl = element.closest('.single-item')
    console.log(mainEl)
    let name = mainEl.querySelector('h3').innerText
    let price = mainEl.querySelector('.price').innerText
    let cartItems = document.querySelector('.cart-items')
    price = price.substring(1)
    if (kredit > price) {
        kredit -= price
        cartItems.innerHTML += `<div class="cart-single-item">
                            <h3><span>${name}</span> - $<span class="cena">${price}</span></h3>
                            <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                            </div>`
        document.querySelector('.credit h2 span').innerHTML = kredit
        element.setAttribute('disabled', 'true')
        element.innerText = "----"
    }
}

function removeFromCart(element) {
    let mainEl = element.closest('.cart-single-item')
    let name = mainEl.querySelector('h3 span').innerText
    let knjige = document.querySelectorAll('.single-item')
    let price = mainEl.querySelector('h3 .cena').innerText
    mainEl.remove()
    kredit += parseInt(price);
    document.querySelector('.credit h2 span').innerHTML = kredit
    knjige.forEach(function (k) {
        let itemNam = k.querySelector('.si-content h3').innerText
        if (itemNam === name) {
            k.querySelector('.actions button').removeAttribute('disabled')
            k.querySelector('.actions button').innerText = "Procitaj"
        }
    })
}