// Class shape to construct from colour param into a new property.
class Shape {
    constructor(colour) {
        this.colour = colour;
    }
    // toSVG method to throw any potential error.
    toSVG(text, textColour) {
        throw new Error('Method not implemented');
    }
}

// Circle class that extends the Shape class, to construct with colour param.
class Circle extends Shape {
    constructor(colour) {
        super(colour);
    }
    // toSVG method to take the param and create the circle shape based on user input.
    toSVG(text, textColour) {
        const svg = `        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${this.colour}" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>

        </svg>`;
        return svg;
    }
    // Render method to return an SVG string for circle element for jest testing.
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.colour}" />`;
    }
}
  
// Triangle class that extends the Shape class, to construct with colour param.
class Triangle extends Shape {
    constructor(colour) {
        super(colour);
    }
    // toSVG method to take the param and create the triangle shape based on user input.
    toSVG(text, textColour) {
        const svg = `        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150,20 20,180 280,180" style="fill:${this.colour}" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>

        </svg>`;
        return svg;
    }
    // Render method to return an SVG string for triangle element for jest testing.
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`;
    }
}
  
// Square class that extends the Shape class, to construct with colour param.
class Square extends Shape {
    constructor(colour) {
        super(colour);
    }
    // toSVG method to take the param and create the square shape based on user input.
    toSVG(text, textColour) {
        const svg = `        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect x="50" y="50" width="200" height="100" fill="${this.colour}" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>

        </svg>`;
        return svg;
    }
    // Render method to return an SVG string for square element for jest testing.
    render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.colour}" />`;
    }
}
  
// Exports the object containing the classes above for other modules to import from.
module.exports = {
    Circle,
    Triangle,
    Square,
};