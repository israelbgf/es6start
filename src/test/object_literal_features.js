import {expect} from 'chai'

describe('ES6 object literals', () => {

    let prototype = {
        'foo': function(){
            return 'bar'
        }
    }

    it('should allow prototype to be defined', () => {
        let object = {
            __proto__: prototype
        };
        
        expect(object.foo()).to.be.equal('bar')
    })

    it('should allow the use of the super keyword', () => {
        let object = {
            __proto__: prototype,
            superify(){
                return super.foo()
            }
        };
        
        expect(object.superify()).to.be.equal('bar')
    })

    it('should infer property name from nested method name', () => {
        let object = {
            foo() {
                return 'bar'
            }
        };
        
        expect(object.foo()).to.be.equal('bar')
    })
    
    it('should infer property name from method name', () => {
        let object = {
            foo
        };
        function foo() {
            return 'bar'
        }
        
        expect(object.foo()).to.be.equal('bar')
    })    
    
    it('should allow properties name to be dinamically generated', () => {
        let object = {
            [generateName('Foo')]:42
        };
        function generateName(name) {
            return `property${name}`
        }
        
        expect(object).to.have.property('propertyFoo');
    })

})