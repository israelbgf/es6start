let DISCLAIMER = 'Examples of importing techniques'

function incrementByOne(value){
    return increment(value, 1)
}

function incrementByTwo(value){
    return increment(value, 2)
}

function increment(value, increment){
    return value + increment
}

export {type} from 'os'
export {incrementByOne, incrementByTwo}
export default DISCLAIMER
