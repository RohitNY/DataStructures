const lexicalOrder = (word1, word2, alphabet) => {
  const lexical_order = new Map();
  for(let i=0; i < alphabet.length; i++) {
    lexical_order[alphabet[i]] = i;
  }
  let i=0,j=0;
  while(i<word1.length && j<word2.length) {
    if(lexical_order[word1[i]] > lexical_order[word2[j]]) return false;
    if(lexical_order[word1[i]] < lexical_order[word2[j]]) return true;
    i++;
    j++;
  }
  return true
}