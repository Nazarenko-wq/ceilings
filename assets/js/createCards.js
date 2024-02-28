const parent = document.querySelector('.cards');
parent.classList.add('cards');

for(let i = 1; i < 9; i++) {
    let card = document.createElement('div');
    card.style.backgroundImage = `url(./assets/img/card${i}.png)`
    card.classList.add('card');
    parent.append(card);

    let btn = document.createElement('button');
    btn.textContent = 'Заказать';
    btn.classList.add('card_btn');
    card.append(btn);

    let cardDiscription = document.createElement('div');
    cardDiscription.classList.add('card_description');
    card.append(cardDiscription);

    let cardTitle = document.createElement('h5');
    cardTitle.textContent = 'Глянцевые натяжные потолки';
    cardTitle.classList.add('card_title');
    cardDiscription.append(cardTitle);

    let cardSubtitle = document.createElement('p');
    cardSubtitle.textContent = 'Цена с установкой:';
    cardSubtitle.classList.add('card_subtitle');
    cardDiscription.append(cardSubtitle);

    let span = document.createElement('span');
    span.textContent = 'от 20 BYN/м²';
    cardSubtitle.append(span);

    let calculator = document.createElement('div');
    calculator.classList.add('calculator');
    card.append(calculator);

    let img = document.createElement('img');
    img.src = `./assets/img/calculator.png`;
    calculator.append(img);
}