const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.item-recipe')

for (let recipe of recipes) {
    recipe.addEventListener('click', function(){
        const image = recipe.getElementsByTagName('img').item('src')
        const title = recipe.getElementsByTagName('h2').item('textContent')
        const autor = recipe.getElementsByTagName('p').item('textContent')
        
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('.modal-image img').src = image.src
        modalOverlay.querySelector('.modal-content h2').innerHTML = title.innerHTML
        modalOverlay.querySelector('.autor').innerHTML = autor.innerHTML
    })
}

document.querySelector('.fechar').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})