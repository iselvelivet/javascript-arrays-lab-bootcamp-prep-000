const app = "I don't do much."
function Arrays () {
  var kittens = ['Milo', 'Otis', 'Garfield']
}
function kittens () {
  var kittens = ['Milo', 'Otis', 'Garfield']
}
function destructivelyAppendKitten (name) {
  kittens.push(name)
}
function destructivelyPrependKitten (name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten (name) {
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten (name) {
  kittens.shift(name)
}
function appendKitten (name) {
  kittens = [...kittens, name]
  return kittens
}
function prependKitten (name) {
  kittens2 = [name, ...kittens]
  return kittens2
}
