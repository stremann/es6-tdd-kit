import chai, {expect} from 'chai';
import {spy, stub} from 'sinon';
import sinonChai from 'sinon-chai';

import Calculator from '../src/';

chai.use(sinonChai);

describe('Calculator', () => {
    let sut;

    beforeEach(() => {
        sut = new Calculator();
    });

    it('should sum 2 numbers', () => {
        const expected = 5;
        const actual = sut.sum(2, 3);
        expect(actual).to.equal(expected);
    });

    it('should sum all the passed numbers', () => {
        expect(sut.sum(1, 2, 3, 4, 5)).to.equal(15);
    });

    it('should substract from greater', () => {
        const expected = 1;
        const actual = sut.sub(5, 4);

        expect(actual).to.equal(expected);
    });

    it('should substract from greater and replace numbers if needed', () => {
        const expected = 1;
        const actual = sut.sub(4, 5);

        expect(actual).to.equal(expected);
    });

    it('should multiply two numbers', () => {
        expect(sut.mult(2, 2)).to.equal(4);
    });

    it('should square a number', () => {
        expect(sut.square(3)).to.equal(9);
    });

    describe('Hype-O_o-tenuza', () => {
        it('should sqrt^2^2 of 1st arguments', () => {
            stub(sut, 'square');
            sut.hype(2, 3);
            expect(sut.square).calledWith(2);
        });

        it('should sqrt^2^2 of 2nd arguments', () => {
            stub(sut, 'square');
            sut.hype(2, 3);
            expect(sut.square).calledWith(3);
        });

        it('should sum two squared numbers', () => {
            stub(sut, 'sum');
            sut.hype(2, 3);
            expect(sut.sum).calledWith(
                sut.square(2),
                sut.square(3)
            );
        });

        it('should return sqrt of sum', () => {
            const expected = 5;
            const actual = sut.hype(3, 4);
            expect(actual).to.equal(expected);
        });
    });

    describe('Parser', () => {
        it('should remove all spaces om str', () => {
            expect(sut.removeSpaces('1 +2 +3')).to.equal(sut.removeSpaces('1+2+3'));
        });

        it('should return sum of all passed to string', () => {
            expect(sut.parse('1 +2 +3')).to.equal(6);
        });

    });
});