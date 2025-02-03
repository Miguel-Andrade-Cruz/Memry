const CardsTable = () => {
    
  let cards_on_table = [];
  
  let coords = {
    x : _SQUARE_ /2,
    y : _SQUARE_ /2
  };
  
  for ( let new_y = 0; new_y !== _GRID_; new_y += 1) {

    for ( let new_x = 0; new_x !== _GRID_; new_x += 1) {
    
      let new_card = Card(coords.x, coords.y);
      
      cards_on_table = [...cards_on_table, new_card];
      
      coords.x += _SQUARE_;    
    }
    
    coords.x = _SQUARE_ /2;
    coords.y += _SQUARE_;
  }
  
  CreateFigures(cards_on_table)
  
  const cards_info = {
    
    cards  : cards_on_table,
    renderCards : () => {
      
      for ( let card of cards_info.cards ) {
        
        card.render();
      }
      
    }
    
  };
  
  return cards_info;
  
}