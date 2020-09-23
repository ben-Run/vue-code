/* 

完善promise 链式调用

*/

const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED';

// 处理then返回结果的流程
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<myPromise>'))
  }

  let called = false

  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      let then = x.then
      // 判断是否是promise
      if (typeof then === 'function') {
        then.call(x, (y) => {
          // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
          if (called) return
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, (r) => {
          if (called) return
          called = true
          reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    // 如果 x 不为对象或者函数，以 x 普通值执行回调
    resolve(x)
  }
}

class myPromise {
  constructor (executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

    this.onResolveCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      // 如果是promise 继续执行他的then
      if (value instanceof myPromise) {
        value.then(resolve, reject)
        return;
      }

      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        // 发布
        this.onResolveCallbacks.forEach((fn) => fn())
      }
    }

    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        // 发布
        this.onRejectedCallbacks.forEach((fn) => fn())
      }
    }

    try {
      // 执行传进来的fn, 在给他提供改变状态的内部fn
      executor(resolve, reject)
    } catch(e) {
      reject(e)
    }

    
  }

  // 不仅仅是返回一个新的promise 
  // 1. 还要处理状态的改变
  // 2. 值得传递
  // so 在执行回调的时候我们把这部分抽到 resolvePromise 函数中
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    // return new promise
    let promise2 = new myPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch(e) {
            reject(e)
          }
        }, 0)
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch(e) {
            reject(e)
          }
        }, 0)
      }

      if (this.status === PENDING) {
        // 订阅
        this.onResolveCallbacks.push( () => {
          // 因为then的回调是放在异步，所以这里暂时用宏任务settimeout来模拟
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value) // x: 普通值 or promise
              // resolve、reject 是用来改变状态，所以需要传进去
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason) // x: 普通值 or promise
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
    })
    return promise2
  }

  // 捕获异常
  catch (errorCallback) {
    return this.then(null, errorCallback);
  }

 


 static reject (reason) {
    return new myPromise((resolve, reject) => {
      reject(reason)
    })
  }
  
 static resolve (value) {
    return new myPromise((resolve, reject) => {
      resolve(value)
    })
  }
}

myPromise.defer = myPromise.deferred = function () {
  let deferred = {}

  deferred.promise = new myPromise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })
  return deferred
}


module.exports = myPromise













