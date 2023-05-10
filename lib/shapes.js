class Shape {
    constructor(colour) {
        this.colour = colour;
    }
    toSVG(text, textColour) {
        throw new Error('Method not implemented');
    }
}
  
class Circle extends Shape {
    constructor(colour) {
        super(colour);
    }
    toSVG(text, textColour) {
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="150" cy="100" r="80" fill="${this.colour}" />
                        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>
                    </svg>`;
        return svg;
    }
}
  
class Triangle extends Shape {
    constructor(colour) {
        super(colour);
    }
    toSVG(text, textColour) {
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150,20 20,180 280,180" style="fill:${this.colour}" />
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>
                    </svg>`;
      return svg;
    }
}
  
class Square extends Shape {
    constructor(colour) {
        super(colour);
    }
    toSVG(text, textColour) {
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        <rect x="50" y="50" width="200" height="100" fill="${this.colour}" />
                        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>
                    </svg>`;
      return svg;
    }
}
  
module.exports = {
    Circle,
    Triangle,
    Square,
};