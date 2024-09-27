const getTotalIsles = function (grid) {

    let count = 0;

    const recursive = (row, col) => {
      grid[row][col] = 2;

      if (grid[row][col + 1] === 'L') recursive(row, col + 1);
      if (grid[row + 1]?.[col] === 'L') recursive(row + 1, col);
      if (grid[row][col - 1] === 'L') recursive(row, col - 1);
      if (grid[row - 1]?.[col] === 'L') recursive(row - 1, col);
    };

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === 'L') {
          count++;
          recursive(row, col);
        }
      }
    }

    return count;
  
};

module.exports = getTotalIsles;