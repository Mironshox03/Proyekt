const cardsContainer = document.querySelector('.cards-container');
const existingCards = document.querySelectorAll('.card');
let btn = document.querySelector('.whats-new .load-more');
btn.addEventListener('click' , () => {
    btn.innerHTML = "dblclick"
    cardsContainer.innerHTML = `
            <div class="card">
                <img src="img/imageoffice.jpg" alt="Office">
                <p class="date">12 may, 2020</p>
                <p class="title">Office explained in fewer than 100+ Characters</p>
            </div>
            <div class="card">
                <img src="img/imagedogs.jpg" alt="Dog">
                <p class="date">08 may, 2020</p>
                <p class="title">This week's top Stories about Development</p>
            </div>
            <div class="card">
                <img src="img/imagefriend.jpg" alt="Business">
                <p class="date">05 may, 2020</p>
                <p class="title">Facts about Business that you never knew</p>
            </div>
            <div class="card">
                <img src="img/imageoffice.jpg" alt="Office">
                <p class="date">12 may, 2020</p>
                <p class="title">Office explained in fewer than 100+ Characters</p>
            </div>
            <div class="card">
                <img src="img/imagedogs.jpg" alt="Dog">
                <p class="date">08 may, 2020</p>
                <p class="title">This week's top Stories about Development</p>
            </div>
            <div class="card">
                <img src="img/imagefriend.jpg" alt="Business">
                <p class="date">05 may, 2020</p>
                <p class="title">Facts about Business that you never knew</p>
            </div>
            <div class="card">
                <img src="img/imageoffice.jpg" alt="Office">
                <p class="date">12 may, 2020</p>
                <p class="title">Office explained in fewer than 100+ Characters</p>
            </div>
            <div class="card">
                <img src="img/imagedogs.jpg" alt="Dog">
                <p class="date">08 may, 2020</p>
                <p class="title">This week's top Stories about Development</p>
            </div>
            <div class="card">
                <img src="img/imagefriend.jpg" alt="Business">
                <p class="date">05 may, 2020</p>
                <p class="title">Facts about Business that you never knew</p>
            </div>
    `;
})
btn.addEventListener('dblclick' , () => {
    btn.innerHTML = "click"
    cardsContainer.innerHTML = `
    <div class="card">
                <img src="img/imageoffice.jpg" alt="Office">
                <p class="date">12 may, 2020</p>
                <p class="title">Office explained in fewer than 100+ Characters</p>
            </div>
            <div class="card">
                <img src="img/imagedogs.jpg" alt="Dog">
                <p class="date">08 may, 2020</p>
                <p class="title">This week's top Stories about Development</p>
            </div>
            <div class="card">
                <img src="img/imagefriend.jpg" alt="Business">
                <p class="date">05 may, 2020</p>
                <p class="title">Facts about Business that you never knew</p>
            </div>
    `;
})

let next = document.querySelector('.nexts')
let prev = document.querySelector('.prevs')
next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})
prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

document.getElementById('view-all').addEventListener('click', function() {
    alert('View all work button clicked!');
});

document.querySelector('.digital-creation .read-more').addEventListener('click', function() {
    alert('Read more about our digital creations!');
});

document.querySelectorAll('.values .read-more').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Read more about this value!');
    });
});

