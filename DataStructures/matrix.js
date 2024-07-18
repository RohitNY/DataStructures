function matrix(n) {
  const result = [];
  for (let i = 0; i < n; i++) result.push([]);
  counter = 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let columnStart = 0;
  let columnEnd = n - 1;
  while (rowStart <= rowEnd && columnStart <= columnEnd) {
    console.log(`%c${rowStart}; %c${rowEnd}; %c${columnStart}; %c${columnEnd}`,"color:red;","color:blue","color:green", "color:orange");
    for (let i = columnStart; i <= columnEnd; i++) result[rowStart][i] = counter++;
    rowStart++;
    for (let i = rowStart; i <= rowEnd; i++) result[i][columnEnd] = counter++;
    columnEnd--;
    for (let i = columnEnd; i >= columnStart; i--) result[rowEnd][i] = counter++;
    rowEnd--;
    for (let i = rowEnd; i >= rowStart; i--) result[i][columnStart] = counter++;
    columnStart++;
  }
  return result;
}