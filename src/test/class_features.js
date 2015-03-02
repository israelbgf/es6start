import {expect} from 'chai'

describe('ES6 classes', () => {

    class Foo {
        foo(){
            return 'foo'
        }
    }

    class MegaFoo extends Foo{
        constructor(name){
            this.name = name
        }
        
        foo(){
            return `${this.name} awakens the '${super.foo()}'`
        }
        
        static static(){
            return  'Hmm...'
        }
    }

    it('should allow single inheritance', () => {
        expect(new MegaFoo('Sean Connery').foo()).to.be.equals('Sean Connery awakens the \'foo\'')
    })
    
    it('should allow static methods', () => {
        expect(MegaFoo.static()).to.be.equals('Hmm...')
    })
});