const { Shape, Triangle, Circle, Square } = require('./shapes.js');


describe('Shape', () => {
    describe('Create Triangle', () => {
        it('should create shape Triangle', () => {
            const triangle = new Triangle();
            triangle.setColor('green'); 
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />')
        })
    })
    describe('Create Circle', () => {
        it('should create shape circle', () => {
            const circle = new Circle();
            circle.setColor('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />')
        })
    })
    describe('Create Square', () => {
        it('should create shape square', () => {
            const square = new Square();
            square.setColor('yellow');
        expect(square.render()).toEqual('<rect width="120" height="120" x="90" y="40" fill="yellow" />')
        })
    })
})


