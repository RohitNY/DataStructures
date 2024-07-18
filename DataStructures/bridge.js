const bestBridge = (grid) => {
  const rowCount = grid.length;
  const colCount = grid[0].length;
  let mainIsland;
  for(let row = 0; row < rowCount; row++) {
    for(let col = 0; col < colCount; col++){
        const possibleIsland = traverseIsland(grid, row, col,new Set());
        if(possibleIsland.size > 0){ 
          mainIsland = possibleIsland;
          break;}
    }
  }
  let visited = new Set(mainIsland);
  
  const queue = [];
  for(const pos of mainIsland) {
    const [row,col] = pos.split('-').map(Number);
    queue.push([row,col,0]);
  }
  
  while(queue.length) {
    const [row,col, distance] = queue.shift();
    if(!mainIsland.has(`${row}-${col}`) && grid[row][col]==="L") return distance -1;
    visited.add(`${row}-${col}`);
    const deltas =  [[-1,0], [1,0], [0,1], [0,-1]]
    for(const [deltaRow, deltaCol] of deltas) {
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      if(inBounds(grid, neighborRow, neighborCol) && !visited.has(`${neighborRow}-${neighborCol}`)) {
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }
};

const traverseIsland = (grid, row, col, visited) => {
  const rowInBounds = row>=0 && row < grid.length;
  const colInBounds = col>=0 && col < grid.length;
  if(!rowInBounds || !colInBounds) return visited;
  if(visited.has(`${row}-${col}`)) return visited;
  if(grid[row][col]==="W") return visited;
  visited.add(`${row}-${col}`);
  traverseIsland(grid, row - 1, col, visited);
  traverseIsland(grid, row + 1, col, visited);
  traverseIsland(grid, row, col - 1, visited);
  traverseIsland(grid, row, col + 1, visited);
  return visited;
}

const inBounds = (grid, row, col) => (row>=0 && row < grid.length) &&
  (col>=0 && col < grid[0].length);



const grid = [
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["L", "L", "W", "W", "L"],
  ["W", "L", "W", "W", "L"],
  ["W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W"],
];
bestBridge(grid);

