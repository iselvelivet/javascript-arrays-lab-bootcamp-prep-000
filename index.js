const app = "I don't do much."
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
  var kittens = ['Milo', 'Otis', 'Garfield']
  kittens = [...kittens, name]
  return kittens
}
function prependKitten (name) {
  var kittens = ['Milo', 'Otis', 'Garfield']
  kittens = [name, ...kittens]
  return kittens
} 
