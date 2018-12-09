/**
 *   1 Array:一种特别的对象(内部是有序的)
 **/


/**
 *
 *  1 判断 基本类型
 *      typeof  typeof返回数据类型的字符串表达
 *      undefined 数值  字符串  布尔值
 *
 *
 *
 *
 *      instance
 *
 *
 *
 *
 *      ===   可以判断 undefined null 因为 undefined null只有一个值
 *
 **/



/**
 *  2 对象类型判断
 *
 * **/

/**
 *
 * 如何访问对象内部数据
 *
 * .属性名
 * ['属性名']
 *
 * **/

const a =2;
console.log(typeof a === 'number')

const b ='abc';
console.log( typeof  b === 'string')

console.log('--------------------------')
let b1 = {
    b2: [1,'abc',console.log],
    b3:function () {
        console.log('b3')
    }
}

console.log(b1 instanceof Object)
console.log(b1 instanceof Array)
console.log(b1.b2 instanceof Array)
console.info(b1 )

// 访问属性名
let data = {
    name: 'tom',
    age: 12,
    setName: function (name) {
        this.name = name
    },
    setAge: function (age) {
        this.age = age

    }
}
// 这一种方式就是用['属性名的方式'](里面是你所设置的值)
data['setName']('Toms')
console.log(data.name)
console.log(data['name'])
