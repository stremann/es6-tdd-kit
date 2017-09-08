import chai, {expect} from 'chai';
import {spy, stub} from 'sinon';
import sinonChai from 'sinon-chai';

import {parse} from '../src/';

import Calculator from '../src/';

chai.use(sinonChai);

describe('Calculator', () => {
    let sut;

    beforeEach(() => {
        sut = new Calculator();
    });

    it('should sum numbers', () => {
        const expected = 10;
        const actual = sut.sum(1,2,3,4);
        expect(expected).to.equal(actual);
    })

    it('should substract numbers', () => {
        const expected = 1;
        const actual = sut.substract(1, 2);
        expect(expected).to.equal(actual);
    })

    it('should substract numbers', () => {
        const expected = 0;
        const actual = sut.substract(1, 2, 3);
        expect(expected).to.equal(actual);
    })

    it('should divide two numbers', ()=>{
        const expected = -10;
        const actual = sut.divide(-100,10)
        expect(expected).to.equal(actual)
    })

    it('should throw error if second number is equal 0', ()=>{
        const actual = sut.divide.bind(null,-100,0)
        expect(actual).to.throw()
    })

    it('should calc pssed string', ()=>{
        const actual = sut.calc('1+2+3+4');
        const expected = 10;
        expect(expected).to.equal(actual);
    })

    //it('should calc pssed string', ()=>{
    //    const actual = sut.calc('1+2+3+4-10');
    //    const expected = 0;
    //    expect(expected).to.equal(actual);
    //})

    it('should calc pssed string', ()=>{

        spy(sut, 'parse')/*.returns([10, 2])*/;

        const actual = sut.calc('10+2');
        const expected = 12;
        expect(expected).to.equal(actual);
    })

});


describe('Parse', () => {
    let sut;
    beforeEach(() => {
        sut = parse;
    })

    it('Should parse str and array', () => {

        const actual = sut('10+2');
        const expected = ([10, 2]);

        expect(expected).to.have.all.members(actual);
    })
})