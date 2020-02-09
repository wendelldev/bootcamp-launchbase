const recipes = document.querySelectorAll('.item-recipe')


for (let item of recipes) {
    item.addEventListener('click', () => {
        const item_id = item.getAttribute('id')
        window.location.href = `/recepts/${item_id}`
    })
}

const hidden_ingredients = document.querySelector('.ingredients .titles p')
hidden_ingredients.addEventListener('click', () => {
    if (hidden_ingredients.innerHTML == 'ESCONDER') {
        document.querySelector('.ingredients-list').classList.add('hidden')
        hidden_ingredients.innerHTML = 'MOSTRAR'
    } else {
        document.querySelector('.ingredients-list').classList.remove('hidden')
        hidden_ingredients.innerHTML = 'ESCONDER'
    }
})

const hidden_prepair = document.querySelector('.prepair .titles p')
hidden_prepair.addEventListener('click', () => {
    if (hidden_prepair.innerHTML == 'ESCONDER') {
        document.querySelector('.prepair-list').classList.add('hidden')
        hidden_prepair.innerHTML = 'MOSTRAR'
    } else {
        document.querySelector('.prepair-list').classList.remove('hidden')
        hidden_prepair.innerHTML = 'ESCONDER'
    }
})

const hidden_information = document.querySelector('.information .titles p')
hidden_information.addEventListener('click', () => {
    if (hidden_information.innerHTML == 'ESCONDER') {
        document.querySelector('.text-information').classList.add('hidden')
        hidden_information.innerHTML = 'MOSTRAR'
    } else {
        document.querySelector('.text-information').classList.remove('hidden')
        hidden_information.innerHTML = 'ESCONDER'
    }
})
