let parent = document.querySelector('.pagination_cards');
parent.classList.add('pagination_cards');

for(let i = 1; i < 7; i++) {
    let card = document.createElement('div');
    card.classList.add('pagination_card');
    parent.append(card);

    let cardInfo = document.createElement('div');
    cardInfo.classList.add('pagination_card_info');
    card.append(cardInfo);

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('pagination_checkbox');
    input.name = 'check';
    input.id = 'pagination_card';
    cardInfo.append(input);

    let label = document.createElement('label');
    label.textContent = 'Вся квартира/дом';
    
}