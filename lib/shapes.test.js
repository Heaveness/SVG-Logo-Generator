// Global variables for requirement to use local modules.
const { Circle, Triangle, Square } = require('../lib/shapes');

// Describe function to show the test suite for render() in shapes.js for circles.
describe('Circle', () => {
    it('should render the correct SVG', () => {
        const shape = new Circle(`${this.colour}`);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.colour}" />`);
    });
});

// Describe function to show the test suite for render() in shapes.js for triangle.
describe('Triangle', () => {
    it('should render the correct SVG', () => {
        const shape = new Triangle(`${this.colour}`);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`);
    });
});

// Describe function to show the test suite for render() in shapes.js for square.
describe('Square', () => {
    it('should render the correct SVG', () => {
        const shape = new Square(`${this.colour}`);
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="100" fill="${this.colour}" />`);
    });
});