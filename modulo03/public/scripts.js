const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const video_id = card.getAttribute('id')
        window.location.href = `/video?id=${video_id}`
    })
}


