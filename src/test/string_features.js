import {expect} from 'chai'

describe('ES6 template strings', () => {
    
    it('should be able to create multi-line strings', () => {
        expect(`I'am a multi-line string
            with an ugly
                white-space!`.includes('     ')).to.be.true();
    });
    
    it('should be able to create string interpolation with variables', () => {
        let name = 'Heisenberg';
        expect(`You are ${name + '!!'}`).to.be.equal('You are Heisenberg!!');
    }); 
    
    it('should be able to create tagged templates', () => {
        let answer = '<b>Hack</b>'
        expect(myEscape`Here it goes: ${answer}!!`).to.be.equal('Here it goes: Hack!!')
        
        function myEscape(literals, ...values){
            return literals[0] + 'Hack' + literals[1]
        }
    });

});