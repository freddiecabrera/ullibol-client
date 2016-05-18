export function myEach (collection, cb) {
  if (collection.constructor === Array) {
    for (let i = 0; i < collection.length; i++) {
      let index = i
      cb(collection[i], index, collection)
    }
  }
  if (collection.constructor === Object) {
    for (let key in collection) {
      cb(collection[key], key, collection)
    }
  }
}

export function myMap (collection, cb) {
  let mapped = []
  myEach(collection, function (item) {
    mapped.push(cb(item))
  })
  return mapped
}
