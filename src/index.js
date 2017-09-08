class Calculator {
    sum(...args){
        return args.reduce((acc, next) => acc + next);
    }

    sub(a, b) {
        return a < b ? b - a : a - b;
    }

    mult(a, b) {
        return a * b;
    }

    hype(a, b) {
        return hidden(a, b, this);
    }

    square(a) {
        return a * a;
    }

    parse(str) {
        return this.sum(...this.removeSpaces(str).split('+').map(item => parseFloat(item)))
    }

    removeSpaces(str) {
        return str.replace(/\s/g, '');
    }





}

function hidden(a, b, scope) {
    return Math.sqrt(
        scope.sum(scope.square(a), scope.square(b))
    )
}

export default Calculator;