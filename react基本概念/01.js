// let proxy = new Proxy({
//     age: 24,
// }, {
//     get: function(target, propKey) {
//         return 2;
//     }
// });

// console.log(proxy.age);
// let proxy = new Proxy({
//     age: 24,
//     name: 'zhangsan'
// }, {})

// console.log(proxy.name) //zhangsan

// let proxy = new Proxy({}, {
//     get: function(taeget, propKey) {
//         return 1;
//     }
// })

// let obj = Object.create(proxy)

// console.log(obj.name); //1


// let person = {
//     name: 'sadd',
//     age: 23,
// }

// let proxy = new Proxy(person, {
//     get: function(target, propKey) {
//         if(propKey in target) {
//             return target[propKey];
//         } else {
//             throw new ReferenceError('这个' + propKey + '不在person中');
//         }
//     }
// })

// console.log(proxy.age);
// console.log(proxy.title);

// function createArr(...args) {
//     let target = [];
//     target.push(...args);
//     let handler = {
//         get (target, propKey) {
//             if(propKey < 0) {
//                 let index = Number(propKey)
//                 propKey = String(target.length + index)
//             }
//             return Reflect.get(target, propKey)
//         }
//     }
//     return new Proxy(target, handler)
// }


// let arr = createArr('1', '2', '3')
// console.log(arr[-1]);

// let handler = {
//     set(target, propKey, value) {
//         if(propKey === 'age') {
//             if(!Number.isInteger(value)) {
//                 throw new TypeError('not a integer')
//             }
//             if(value > 200) {
//                 throw new RangeError('The age seems invalid')
//             }
//             target[propKey] = value;
//             return true
//         }
//     }
// }

// let person = {
//     age: 68
// }
// let proxy = new Proxy(person, handler)

// proxy.age = 4;
// // proxy.age = 999;
// proxy.age = 'da'


// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('fail')), 3000)
//   })
  
//   const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
//   })
  
//   p2
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//   // Error: fail

// function fun(n,o) {
//     console.log(o);
//     return {
//          fun:function(m) {
//                return fun(m,n);
//          }
//     };
// }
// var a = fun(0);  //undefined
// a.fun(1);  //0  
// a.fun(2);  //0  
// a.fun(3);  //0  
// var b = fun(0).fun(1).fun(2).fun(3);   //undefined  0  1  2
// var c = fun(0).fun(1);  
// c.fun(2);  
// c.fun(3);  //undefined  0  1  1

function fn(){
    var arr = [];
    for(var i = 0;i < 5;i ++){
      arr[i] = function(){
          return i;
      }
    }
    return arr;
 }
 var list = fn();
 for(var i = 0,len = list.length;i < len ; i ++){
    console.log(list[i]());
 }  //
