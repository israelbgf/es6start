import {expect} from 'chai'

describe('ES6 function parameters handling', () => {
    
    it('should allow default parameters to be specified', () => {
        expect(say()).to.be.equal('Hello')
        
        function say(something='Hello'){
            return something
        }
    });
    
    it('should allow multiple parameters be associated to one array', () => {
        expect(countWords('Hello', 'World')).to.be.equal(2)
        
        function countWords(...words){
            return words.length
        }
    });
    
    it('should allow parameters to be spreaded', () => {
        expect(sum(...[2, 3])).to.be.equal(5)
        
        function sum(a, b){
            return a + b
        }
    });
    
});