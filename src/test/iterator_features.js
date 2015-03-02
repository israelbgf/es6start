import {expect} from 'chai'

describe('ES6 iterators + For..Of', () => {
    
    it('should have a new syntax for iteration', () => {
        let array = []
        for(let number in [0, 2, 4])
            array.push(number)
        expect(array).to.have.length(3)
    });

    it('should have a syntax for creating generator functions', () => {
        let array = []
        for (var v of foo()) {
            array.push(v);
        }

        expect(array).to.eql([0, 1])

        function *foo() {
            let i = 0
            yield i
            i++
            yield i
        }
    });
    
});