var MathCalc = {};

MathCalc.circleCircumference = function (radius) {
    return 2 * Math.PI * radius;
}
MathCalc.circleArea = function (radius) {
    return 2 * Math.PI * radius;
}

// export object in data
exports.data = MathCalc;