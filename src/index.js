// import fetch from 'whatwg-fetch';
function isNumbers(args) {
    return args.every(el => typeof el === 'number');
}

class Calculator {
    sum(...args) {

        if(!isNumbers(args)){
            throw new Error('Input valid arguments')
        }
        return args.reduce((a, b) => a + b);
    }

    divide(a, b) {
        if (b == 0) {
            throw new Error('Do not divide on zero');
        } else {
            return a / b;
        }
    }

    sqrt(a) {
        return Math.sqrt(a)
    }

    pow(a, b) {
        return Math.pow(a, b);
    }

    hyp(a, b) {
        return this.sqrt(this.sum(this.pow(a,2),this.pow(b,2)));
    }

    getPI() {
       return fetch('server/pi')
           .then(response => response.json());

    }


}

export default Calculator;
