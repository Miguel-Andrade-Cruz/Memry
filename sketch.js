const cards_info = CardsTable();


function setup() {

  createCanvas(_LAYOUT_, _LAYOUT_);
  if ( _GRID_ % 2 !== 0 ) {
    
    text('Não é possível montar um jogo com número de peças ímpares.')
    noLoop();
  }
  background(220);

}



function draw() {
  
  cards_info.renderCards();
  CardPressed(cards_info.cards);
}

