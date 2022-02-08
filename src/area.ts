function getCircleArea(circle: CircleShape) {
    const area: number = circle.radius * circle.radius * 3.14;
    console.log(`Circle Area: ${area}`);;
}

function getRectangleArea(rectangle: RectangleShape) {
    const area: number = rectangle.length * rectangle.width;
    console.log(`Rectangle Area: ${area}`);
}

function getTriangleArea(triangle: TriangleShape) {
    const area: number = (triangle.height * triangle.base)/2;
    console.log(`Tringle Area: ${area}`);
}


export interface CircleShape {
    type: 'circle'
    radius: number;
}

export interface RectangleShape {
    type: 'rectangle'
    length: number;
    width: number;
}
  
export interface TriangleShape {
    type: 'tringle'
    height: number;
    base: number;
}


export function getArea(shape: CircleShape | TriangleShape | RectangleShape) {
    switch (shape.type) {
    case 'circle':
        getCircleArea(shape);
        break;
    case 'rectangle':
        getRectangleArea(shape);
        break;
    case 'tringle':
        getTriangleArea(shape);
        break;
    }
}