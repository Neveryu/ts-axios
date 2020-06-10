const toString = Object.prototype.toString

export function isDate(val: any): boolean {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

// 普通对象的判断
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
