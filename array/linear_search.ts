const scores = [88,75,40,60,90]
const target = 100


function linearSearch(input: number[], target: number): number {
  for (let i = 0; i <= input.length; i++){
    const currentElement = input[i];
    if (currentElement === target){
      return i
    }
  }
  return -1
}

const idx = linearSearch(scores, target)
console.log(idx)