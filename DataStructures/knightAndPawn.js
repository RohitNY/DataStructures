const knightAttack = (n, kr, kc, pr, pc) => {
  const queue = [[kr, kc, 0]];
  const visited = new Set();
  visited.add(`${kr}-${kc}`);
  while(queue.length) {
    const [row, col, distance] = queue.shift();
    if(row===pr && col===pc) return distance;
    const deltas = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,2],[1,-2],[2,1],[2,-1]]
    for(const [deltaRow, deltaCol] of deltas) {
      const neighborRow = kr + deltaRow;
      const neighborCol = kc + deltaCol;
      if(inBounds(n, neighborRow, neighborCol) &&!visited.has(`${neighborRow}-${neighborCol}`)){
        visited.add(`${neighborRow}-${neighborCol}`)
        queue.push([neighborRow, neighborCol, distance+1])
      }
    }
  }
  return null
}
const inBounds = (n, row, col) =>{return (row>=0 && row<n) && (col>=0&&col<n);}


knightAttack(8, 1, 1, 2, 2);

const substituteSynonyms = (sentence, synonyms) => {
  let arr= sentence.split(' ');
  const allPossiblities = _substituteSynonyms(arr, synonyms);
  return allPossiblities.reduce((result, arr) => {
    result.push(arr.join(' '));
    return result;
  }, []);
};

const _substituteSynonyms = (arr, synonyms) => {
  if(arr.length===0) return ['']
  let choices = getChoices(arr, synonyms);
  let remainder = arr.slice(1);
  let subsets = _substituteSynonyms(remainder, synonyms);
  let allPossiblities = []
  console.log(choices)
  for(const choice of choices) {
    for(const subset of subsets) {
      allPossiblities.push([choice, ...subset])
    }
  }
  return allPossiblities;
};
const getChoices = (arr, synonyms) => {
  if(arr[0] in synonyms) {
    return synonyms[arr[0]]
  } else [arr[0]];
  
}

const sentence = "follow the yellow brick road";
const synonyms = {
  follow: ["chase", "pursue"],
  yellow: ["gold", "amber", "lemon"],
};
substituteSynonyms(sentence, synonyms);