class CardObj {
  constructor(slot_x, slot_y) {
    
    this.slot_x = slot_x;
    this.slot_y = slot_y;
    
    this.show_image = false;
    this.color_figure = false;
    this.pairFound = false;
  }
  
  touch() {
  
    let inside_x_axis = (
      mouseX > this.slot_x - EDGE && mouseX < this.slot_x + EDGE
    );
    let inside_y_axis = (
      mouseY > this.slot_y - EDGE && mouseY < this.slot_y + EDGE
    );
    
    if (mouseIsPressed && inside_x_axis && inside_y_axis) {

      return true;
    }

    return false;
  }
  
  
  putShow(show_function) { 
  
    
    this.show_image = show_function.show_figure;
    this.color_figure = show_function.figure_color;
  }
  
  flip() {
     
    this.show_image();
  }
  
  permFlip() {
  
    this.pairFound = true;
  }
  
  
  render() {
  
    noStroke();
    fill('white');
    rectMode(CENTER);
    rect(this.slot_x, this.slot_y, _SQUARE_ -10, _SQUARE_ -10);
  }

}