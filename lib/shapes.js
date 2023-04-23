class Shape {
    constructor (){
        this.colour = "white";
        
    }
    setColor(newColor) {
        this.colour = newColor;
    }
}

class Triangle extends Shape {
    render() {
        return "<polygon>"
    }
}
class Circle extends Shape {
    render() {
        return "<circle>"
    }
}


class Square extends Shape{
    render() {
        return "<square>"
    }
}





