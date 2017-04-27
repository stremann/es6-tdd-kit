import chai, {expect} from 'chai';
import {spy, stub} from 'sinon';
import sinonChai from 'sinon-chai';

import Calculator from '../src/';

chai.use(sinonChai);

describe('Calculator', function () {
    let sut;

    beforeEach(() => {
        sut = new Calculator();
    });

    it('should ', () => {

    });
});