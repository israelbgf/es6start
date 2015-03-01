import {expect} from 'chai'

describe('ES6 arrow functions', () => {
    
    it('should be usable with a single expression', () => {
        expect([1, 2, 3, 4].filter(x => x % 2 == 0)).to.be.eql([2, 4])
    });    
    
    it('should be usable with a body', () => {
        expect(true).to.be.true()
    });

    it('should not affect the scope of the "this" keyword', () => {
        let person = {
            name: 'bob',
            say() {
                return (() => this.name)()
            }
        }
        
        expect(person.say()).to.be.equal('bob')
    });

});