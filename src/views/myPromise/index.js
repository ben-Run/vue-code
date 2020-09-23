
const myPromise = require('./promise3')

// promise
// 处理异步结果的一个对象，承若状态改变时调用对应的回调函数

// then特点：
// then 代码在异步队列中执行
// then 返回一个新的promise 对象，并且通过return 来传递结果，跟fn一样默认return underfined
// 抛出异常找到最近的promise对象，并且执行绑定的失败函数，如果没有，则执行catch
// 在then中不管是不是异步，只要resolve、rejected 就会执行对应的函数 onFulfilled、onRejected
// then 函数走了失败回调继续走then，会执行下一步的resolve
// then 绑定promise对象的成功、失败的函数，返回一个新的promise
// resolve 、 rejected 改变状态，执行对应的回调 
// then 返回新对象的状态跟之前的promise状态没有关系，then中返回promise状态跟执行回调的结果有关，如果没有异常则是FULFILLED，就算没有retun 也是FULFILLED，有异常就是REJECTED

// 如果需要看原生的promise 运行的结果，把myPromise 改成Promise 即可
let p = new myPromise((resolve, rejected) => {
  setTimeout(_ => {
    resolve('我成功啦')
  }, 2000)
})

p.then(value => {
  console.log(value)
  // throw '主动抛出异常'  // 抛出一个异常时会走reject 的回调，如果没有绑定 reject的回调则走catch
  return '第二次的成功return'
})
.then(value => {
  console.log(value)
  return new myPromise((resolve, rejected) => {
    rejected('Error: 错误信息')
  })
})
.then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
  return new myPromise((resolve, rejected) => {
    resolve('第四次: 太高兴了，失败之后这里再一次成功啦')
  })
})
.then(value => {
  console.log(`成功：${value}`)
}, reason => {
  console.log(reason)
})
.catch(e => {
  console.log(`这是捕获的异常：${e}`)
})


p.then(res=>{
  return res;
})
.then(res=>{
  return new myPromise((resolve, reject)=>{
    setTimeout(()=>{
      reject('error') // 中间在加一层异步
    },2000)
  })
})
.then(res=>{
  console.log(res)
}, err=>{
  console.log('error: '+ err)
  // 默认 return undefined
  return err
})
.then(res=>{ 
  // 前面是在 reject 中执行，但是还是走了这里，因为只要执行的then 没有报错，里面会resolve(x)
  console.log('second then success: '+res)
}, err=>{
  console.log('second then error: '+err)
})

const p1 = new myPromise((resolve, rejected) => {
  setTimeout(() => {
    // resolve('我的promise 成功初始值')
    rejected('我的promise 失败初始值') 
  }, 2000);
})

p1.then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
})


// 测试其他方法
console.log(myPromise.resolve(3))
console.log(myPromise.reject('失败的啦'))

// 测试 myPromise.all()
const p2 = new myPromise((resolve, rejected) => {
  setTimeout(() => {
    resolve('我是p1，我成功啦') 
  }, 5000)
})

const p3 = new myPromise((resolve, rejected) => {
  setTimeout(() => {
    resolve('我是p2，我成功啦') 
  }, 2000)
})


const p4 = new myPromise((resolve, rejected) => {
  setTimeout(() => {
    resolve('我是p3，我成功啦') 
  }, 3000)
})


const AllList = [p2, p3, p4]


let all = myPromise.all(AllList)
all.then(value => {
  console.log('all：' + value) // all：我是p1，我成功啦,我是p2，我成功啦,我是p3，我成功啦
}) 

// 测试 myPromise.any()let all = myPromise.all(AllList)
let any = myPromise.any(AllList)
any.then(value => {
  console.log('any:' + value)  // 我是p2，我成功啦
})

// 测试finally
p.finally(_ => {
  console.log('我是p的promise，我是最后执行的') // 我是p的promise，我是最后执行的
})

// 测试race
myPromise.race(AllList).then(value => {
  console.log(`race：${value}`) // race：我是p2，我成功啦
})