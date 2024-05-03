const scores = [88,75,40,60,90]
const targer = 90


function linearSearch(input: number[], target: number): number {
  for (let i = 0; i <= input.length; i++){
    const currentElement = input[i];
    if (currentElement === target){
      return i
    }
  }
  return -1
}