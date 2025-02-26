write a function in which we try to see if there are repeating letters in in a String.

function findNewChar(string){
  const letterMap = new Map();
  for (let i = 0; i < string.length; i++){
    letterMap.set(string[i]), (letters.get(string[i]) ?? 0) + 1
  }
  for (let i = 0; i < string.length; i++){
    if (letters.get(string[i] === 1))
    return string[i]
  }
  return undefined
}
