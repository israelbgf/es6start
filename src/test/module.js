import helloworld from "../core/module"
import chai from 'chai'

chai.should();

describe('Hello world usecase', () => {
    it('should return a fancy message', () => {
        helloworld().should.be.equal('Hello All Mighty ES6!')
    })
})