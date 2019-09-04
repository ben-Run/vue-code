// 居间费
function initDataPrice () {
  let _valueList = []
  let _monthStr = '月份'
  let _priceStr = '零售（元）'
  let _year = new Date().getFullYear()
  let _month = 0
  for (let i = 1; i <= 15; i++) {
    if (i === 1 || i === 6 || i === 11) {
      _valueList.push({
        title: _monthStr,
        value: _priceStr,
        type: 'text'
      })
    } else {
      ++_month
      _valueList.push({
        title: `${_year}-${String(_month).padStart(2, '0')}`,
        value: '',
        type: 'input',
        pattern: /^[+-]?[0-9]+([.]{1}[0-9]{1,2}){0,1}$/,
        message: '值须为数值，支持2位小数'
      })
    }
  }
  return _valueList
}
let dataList = [
  {
    unserName: 'Joel 测试',
    desc: 'JoelInfo',
    list: [{
      title: 'web',
      desc: 100
    }, {
      title: 'Java',
      desc: 200
    }, {
      title: 'Node',
      desc: 300
    }, {
      title: '.Net',
      desc: 400
    }, {
      title: 'php',
      desc: 500
    }]  
  },
  {
    unserName: '学科',
    desc: '学科信息',
    list: [{
      title: '语文',
      desc: 10
    }, {
      title: '数学',
      desc: 20
    }, {
      title: '英语',
      desc: 30
    }]  
  }
]

let menuList = [
  {
    title: "web前端",
    path: "",
    children: [
      {
        title: "javaScript",
        path: "/web/js"
      },
      {
        title: "vue.js",
        path: "",
        children: [
          {
            title: "vue admin",
            path: "/web/vue/A",
            children: [
              {
                title: "vue admin page",
                path: "/web/vue admin/vue page"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "flutter",
    path: "",
    children: [
      {
        title: 'dart 介绍',
        path: '/flutter/dart',
        children: [
          {
            title: 'dart 第一章',
            path: '/flutter/dart/01'
          }
        ]
      },
      {
        title: 'flutter 垮平台',
        path: '/flutter/index'
      }
    ]
  },
  {
    title: "pwa",
    path: "",
    children: [
      {
        title: 'pwa demo',
        path: '/pwa/index'
      }
    ]
  },
  {
    title: "nodeJs",
    path: "node/index"
  }
]

export {
  initDataPrice,
  dataList,
  menuList
}