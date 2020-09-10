const enhancer = require('./enhancer.js');
// const { expect } = require('chai');
// test away!

test('restores durability',()=>{
    let item = {
        name: 'item1',
        durability: 7,
        enhancement: 6
    }
        expect(enhancer.repair(item)).toEqual({
            name: 'item1',
            durability: 100,
            enhancement: 6
        })
})

test('enhancement increases',()=>{
    let item = {
        name: 'item2',
        durability: 7,
        enhancement: 6
    }
        expect(enhancer.success(item)).toEqual({
            name: 'item2',
            durability: 7,
            enhancement: 7
        })
})

test('enhancement fails',()=>{
    let item = {
        name: 'item3',
        durability: 10,
        enhancement: 10
    }
        expect(enhancer.fail(item)).toEqual({
            name: 'item3',
            durability: 5,
            enhancement: 10
        })
})
 