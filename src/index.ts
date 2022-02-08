import { getArea, CircleShape, TriangleShape, RectangleShape } from "./area";

const circle: CircleShape = {
    type: 'circle',
    radius: 10,
};

const triangle: TriangleShape = {
    type: 'tringle',
    height: 5,
    base: 10,
};

const rectangle: RectangleShape = {
    type: 'rectangle',
    length: 5,
    width: 7,
};

getArea(circle);
getArea(triangle);
getArea(rectangle);