export const NumberCheck = function (num) {
  var str = num
  var len1 = str.substr(0, 1)
  var len2 = str.substr(1, 1)
  // 1.正则替换，保留数字和小数点
  // eslint-disable-next-line no-useless-escape
  str = str.replace(/[^\d^\.]+/g, '')
  // 2.第一位是0，第二位就不能输入其他数字，但是.可以
  if (len1 === '0' && len2 !== '.') {
    str = len1
  }
  // 3.第一位不能是.
  if (len1 === '.') {
    str = ''
  }
  // 4.限制只能输入一个小数点
  if (str.indexOf('.') !== -1) {
    var str_ = str.substr(str.indexOf('.') + 1)
    if (str_.indexOf('.') !== -1) {
      str = str.substr(0, str.indexOf('.') + str_.indexOf('.') + 1)
    }
  }
  return str
}
