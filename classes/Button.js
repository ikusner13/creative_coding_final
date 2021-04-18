class Button {
  
    constructor(displayText, consequenceIndex, x, y, width, height, bgColor, textColor) {      
      this.displayText = displayText;
      this.consequenceIndex = consequenceIndex;
      this.x = x; 
      this.y = y;
      this.width = width;
      this.height = height;
      this.bgColor = bgColor;
      this.textColor = textColor;
    }
    
    show() {
      textAlign(CENTER, CENTER);
      textSize(14);
      stroke(0);
      fill(this.bgColor);
      rect(this.x, this.y, this.width, this.height);
      
      fill(this.textColor);
      text(this.displayText, this.x, this.y, this.width, this.height);
    }
    
    intersects(x, y) {
      if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
        return true;
      } else {
        return false;
      }
    }
    
  }