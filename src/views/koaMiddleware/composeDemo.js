// 一些特点
/*
1、app.use(fn) // 参数fn
2、级联操作，所以.use 要返回一个koa对象（this 自己）
3、fn(ctx, next) ctx 是关于一个http 请求的上下文对象 执行next函数 调用下一个中间件
4、next(ctx, next)
*/


/*

回顾node基本使用
主要是http模块
koa 是一个非常精简（没有一些规范）的框架封装了对http 处理的细节，以及通过中间件的形式来加强其他的功能 如 日志 路由 等等

*/

/*
// node 基本使用
const http = require("http");

const server = http.createServer(function (req, res) {
    if (req.url == "/") {
        res.end("Hello world!");
    }
});

server.listen(8089);

*/

/*
// koa 基本使用

const Koa = require('koa');
const app = new Koa();
app.use(async (ctx， next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.use((ctx, next) => {
  // dosomething
  ...
  await next();
})
app.listen(8090);

*/


/*
// 简单分析
const middlewareList = []
middlewareList.push(fn)

function use (fn) {
  middlewareList.push(fn)
  // 级联操作需要返回自己
  return this
}

*/

/*
 通常执行一个数组里面的函数，我们遍历即可，但是为了让调用者可以控制是否执行下一个函数
 可以把函数当参数传递出去

for(const item of list) {
  item()
}


*/


/*
  return fn => 引用给使用者

  中间件：处理每一个http，每次请求都要全部执行一次middleware 列表，并且是重新构建相关对象，所以外部需要一个执行器
  return fn(ctx,next) (执行器)
  执行了执行器怎么让他自动执行，并且是调用next 才执行呢？
  也就是我们需要把这个函数传递出去
  当外部调用这个参数的时候就是执行下一个中间件
*/

// 实现
function compose (middleware) {
  if (!Array.isArray(middleware)) {
    throw new TypeError('middleware 必须是数组')
  }

  for (const fn of middleware) {
    if(!typeof fn === 'function') throw new TypeError('中间件必须是函数')
  }

  return function (ctx, next) {
    let index = -1

    // 执行器第一个中间件入口
    return getFn(0)

    function getFn (i) {
      /* 怎么样确保一个中间件只调用一次next 呢？
         1、理论上 i 会大于 index，因为每次执行一次都会把 i递增，
         2、如果相等或者小于，则说明next()执行了多次
      */
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))

      index = i
      let fn = middleware[i]

      // 执行完中间件之后最外层传进来的下一个步骤，如果外部没有传这个就是中间件都执行完毕之后fn置为undefined
      if (i === middleware.length) fn = next

      if (!fn) return Promise.resolve()

      // 这里用promise 包装一层是因为有些时候中间件可能是异步，比如 外部使用await 就可以等待这个执行完在执行下一个中间件
      try {
        return Promise.resolve(fn(ctx, function next() {
          return getFn(i + 1)
        }))
        // 另外一种写法
        // return Promise.resolve(fn(ctx, getFn().bind(null, i + 1)))
      } catch (e) {
        return Promise.reject(err)
      }
    }
  }  
}

