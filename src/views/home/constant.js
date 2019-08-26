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
      desc: 100
    }, {
      title: 'Node',
      desc: 100
    }, {
      title: '.Net',
      desc: 100
    }, {
      title: 'php',
      desc: 100
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
export {
  initDataPrice,
  dataList
}