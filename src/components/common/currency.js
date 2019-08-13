const digitsRE = /(\d{3})(?=\d)/g

// 保留N位,补0, 带千位符
export function currency (value, currency, decimals) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : ''
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}

//保留4位小数
export function currency4 (value) {
    var number = value;
    number = String(number).replace(/^(.*\..{4}).*$/,"$1");
    // number = 12.3321
    number = Number(number); 
    return number;
}
//保留0位小数
export function currency0 (value) {
    var number = value;
    number = String(number).replace(/^(.*\..{0}).*$/,"$1");
    // number = 12.3321
    number = Number(number); 
    return number;
}