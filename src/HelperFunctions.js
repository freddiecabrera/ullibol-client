export function myEach (collection, cb) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      let index = i
      cb(collection[i], index, collection)
    }
  }
  for (let key in collection) {
    cb(collection[key], key, collection)
  }
}

export function myMap (collection, cb) {
  let mapped = []
  myEach(collection, function (item, key) {
    mapped.push(cb(item, key))
  })
  return mapped
}
