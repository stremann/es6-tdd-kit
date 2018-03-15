import chai, {expect} from 'chai';
import {spy, stub} from 'sinon';
import sinonChai from 'sinon-chai';

import Calculator from '../src';

chai.use(sinonChai);

describe('Calculator', function () {
    let sut;

    beforeEach(() => {
        sut = new Calculator();
    });

    it('should return sum of a and b', () => {
        const a = 5, b = 3;
        expect(sut.sum(a, b)).to.equal(8);
    });



    it('should handle unexpected strings in args', () => {
       expect(()=>{sut.sum(1.5, 'hello', 4, 10, null, {})}).to.throw();
    });



    it('should divide 2 numbers', () => {
        expect(sut.divide(8, 2)).to.equal(4);
    });

    it('should return error on zero divide', () => {
        expect(function () {
                sut.divide(8, 2)
            }
        ).to.not.throw();


        expect(() => {
            sut.divide(8, 0)
        }).to.throw()
    });

    it('should return sqrt', () => {
        expect(sut.sqrt(16)).to.equal(4);
    });

    it('should handle different amount of arguments', () => {
        expect(sut.sum(1, 2, 3, 4)).to.equal(10);
    });
    it('should return a powered by b', () => {
        expect(sut.pow(8, 2)).to.equal(64);
    });
    it('should calculate hyp', () => {
        expect(sut.hyp(3, 4)).to.equal(5);
    });


    it('should calc hyp', () => {
        // spy(sut,'sum');
        // stub(sut,'sum');
        stub(sut, 'sum').withArgs(9, 16).returns(25);
        sut.hyp(3, 4);
        expect(sut.sum).calledWith(9, 16);

        expect(sut.hyp(3, 4)).to.equal(5);
    });

    xit('should return PI from server', () => {
        stub(fetch);
       expect(sut.getPI()).to.equal(Math.PI);
    });

});