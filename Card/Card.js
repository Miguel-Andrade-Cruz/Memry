const Card = (slot_x, slot_y) => {

  let card_obj = new CardObj(slot_x, slot_y);
  return card_obj;
};






const CardPressed = (cards) => {
  
  let is_same_card = (
    LAST_CARD.slot_x === CURRENT_CARD.slot_x && LAST_CARD.slot_y === CURRENT_CARD.slot_y
  );
  let is_same_color = ( LAST_CARD.color_figure === CURRENT_CARD.color_figure );



  if ( is_same_color && is_same_card === false && LAST_CARD !== false) {

    LAST_CARD.permFlip();
    CURRENT_CARD.permFlip();
  }

  for (let card of cards) {
    
    if ( card.touch() ) {
      
      card.flip();
      LAST_CARD = CURRENT_CARD;
      CURRENT_CARD = card;
      
    }
  }
  
  cards.map((card) => {
    
    if ( card.pairFound ) {
    
       card.flip();   
    }
  
  });
};

