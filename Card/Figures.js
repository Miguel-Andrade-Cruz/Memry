const _FIGURE_COLORS_ = [
  'red',
  'blue',
  'orange',
  'darkblue',
  'green',
  'lightblue',
  'violet',
  'lightgreen',
  'yellow',
  'crimson',
  'brown',
  'black',
  'grey',
  'purple',
  'pink',
  'blueviolet',
  'aqua',
  'aquamarine',
  'darksalmon',
  'fuchsia',
  'indigo',
  'lime',
  'orangered'
];




const randomColorPicker = () => {
  
  let index =
    Math.floor(Math.random() * _FIGURE_COLORS_.length - 1) + 1
  ;
  
  return _FIGURE_COLORS_[index];
};




const createFigure = (x, y, color_figure) => {
  
  
  const figure =  () => {

    fill(color_figure);
    noStroke();
    circle(x, y, _SQUARE_ - 25);
  };
  
  return {
    
    show_figure : figure,
    figure_color : color_figure
  };
  
};




const CreateFigures = (cards) => {
  
  const updateAvaliableCards = (cards_avaliable) => {
    
    let remaining_cards_avaliable = cards_avaliable.filter((card) => {
      
      return card.show_image === false;
    });
    
    return remaining_cards_avaliable;
    
  };
  
  let cards_avaliable = updateAvaliableCards(cards);
  
  for (
    let card_num = 0;
    card_num !== cards.length;
    card_num += 2
  ) {    
    
    let color_pair = randomColorPicker();
    
    
    let random_index_one = Math.floor(Math.random() * cards_avaliable.length -1) +1;

    let pair_one = cards_avaliable[random_index_one];
    pair_one.putShow(createFigure(pair_one.slot_x, pair_one.slot_y, color_pair));
    
    cards_avaliable = updateAvaliableCards(cards_avaliable);
    
    
    let random_index_two = Math.floor(Math.random() * cards_avaliable.length -1) +1;
    
    let pair_two = cards_avaliable[random_index_two];
    pair_two.putShow(createFigure(pair_two.slot_x, pair_two.slot_y, color_pair));
    
    
    cards_avaliable = updateAvaliableCards(cards_avaliable);    
  }

};







