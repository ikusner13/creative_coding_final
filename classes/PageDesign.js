// This class is basically just a 
// bag of variables we can easily 
// group and pass around as needed

class PageDesign {
    constructor(bgImageWidth, bgImageHeight, marginLeft, marginTop, verticalPadding, textBoxWidth, textBoxHeight, buttonHeight, bgColor, textColor, buttonBGColor, buttonTextColor) {
        this.bgImageWidth = bgImageWidth;
        this.bgImageHeight = bgImageHeight;
        this.marginLeft = marginLeft;
        this.marginTop = marginTop;
        this.verticalPadding = verticalPadding;
        this.textBoxWidth = textBoxWidth;
        this.textBoxHeight = textBoxHeight;
        this.buttonHeight = buttonHeight;
        this.bgColor = bgColor;
        this.textColor = textColor;
        this.buttonBGColor = buttonBGColor;
        this.buttonTextColor = buttonTextColor;
        this.bounds = [240,535,595,65]
    }
}