import {expect} from 'chai'
import theDefaultValueFromModule, {incrementByOne, incrementByTwo, increment, type} from '../usecases/module'

describe('ES6 module imports', () => {
    
    it('should import the default export of the module', () => {
        expect(theDefaultValueFromModule).to.be.equal('Examples of importing techniques')
    });
    
    it('should import the named exports of the module', () => {
        expect(incrementByOne(0)).to.be.equal(1)
        expect(incrementByTwo(8)).to.be.equal(10)
    });

    it('should import the named exports of a third module', () => {
        expect(type).to.exist()
    });

    it('should NOT import a not exported object', () => {
        expect(increment).to.be.undefined(1)
    });

});