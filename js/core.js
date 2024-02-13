const cardsContainer = document.querySelector('.cards')

cards.map(el => {
  let card = `<div class="card flex">
      <div class="img_card">
        <img src=${el.img} alt="">
      </div>
      <p class="tit_card">
        ${el.name}
      </p>
      <div class="prices">
        <span class="price_x">
        ${el.oldPrice} руб.
        </span>
        <span class="price">
        ${el.newPrice} руб.
        </span>
      </div>
      <a class="btn" href=${el.link}>
        КУПИТЬ
      </a>
    </div>`

  cardsContainer.insertAdjacentHTML('beforeend', card)
})
