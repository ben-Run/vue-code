/* 

基本架子
根据promise A+ 规范还要处理then链式调用以及返回值传递的问题，后续在promise2、promise3 处理

*/

const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED';

class myPromise {
  constructor (executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onResolveCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        // 发布
        this.onResolveCallbacks.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        // 发布
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      // 执行传进来的fn, 在给他提供改变状态的fn
      executor(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }
  // 订阅回调函数
  then (onFulfilled, onRejected) {

    if (this.status = PENDING) {
      // 订阅
      this.onResolveCallbacks.push(() => {
        onFulfilled(this.value)
      })

      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason)
      })
    }

    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
  }
}

module.exports = myPromise













