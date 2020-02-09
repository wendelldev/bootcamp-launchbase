const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const site_id = card.getAttribute('id')
        window.location.href = `/courses/${site_id}`
    })
}

