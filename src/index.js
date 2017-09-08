class Calculator {

    sum(...args) {
        return args.reduce((acc, curr) => {
            return acc += curr;
        })
    }

    substract( ...args) {
        return args.slice().sort((a, b) => {
            return a === b ? 0 : b - a;
        }).reduce( (acc, curr) => {
            return acc -= curr;
        });


        //return a > b ? a - b : b - a;
    }

    divide(a,b) {
        if( b!== 0 ){
            return a/b
        } else {
            throw new TypeError('Second number shouldnt be equal 0')
        }
    }



    parse(str) {
        return str
            .split('+')
            .map(el => el.split('-')
                .reduce((acc, curr) =>curr > acc ? curr - acc: acc -curr))
            .map(el => parseInt(el))
        //.reduce((acc , curr) => acc += curr)

    }
    calc(str) {

        return this.sum(...this.parse(str));

    }
}


export const parse = (str) => {

    return str
        .split('+')
        .map(el => el.split('-')
            .reduce((acc, curr) =>curr > acc ? curr - acc: acc -curr))
        .map(el => parseInt(el))
        //.reduce((acc , curr) => acc += curr)

}

export default Calculator;