const { Circle, Triangle, Square } = require('../lib/shapes');

describe('Circle', () => {
    it('should render the correct SVG', () => {
        const shape = new Circle('#ff0000');
        expect(shape.render()).toEqual('<circle cx="100" cy="100" r="50" fill="#ff0000" />');
    });
});

describe('Triangle', () => {
    it('should render the correct SVG', () => {
        const shape = new Triangle('#00ff00');
        expect(shape.render()).toEqual('<polygon points="50,150 250,150 150,50" fill="#00ff00" />');
    });
});

describe('Square', () => {
    it('should render the correct SVG', () => {
        const shape = new Square('#0000ff');
        expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="#0000ff" />');
    });
});