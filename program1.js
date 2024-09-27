const getTotalIsles = function (grid) {

    let count = 0;

    const recursive = (row, col) => {
      grid[row][col] = 2;

      if (grid[row][col + 1] === '1') recursive(row, col + 1);
      if (grid[row + 1]?.[col] === '1') recursive(row + 1, col);
      if (grid[row][col - 1] === '1') recursive(row, col - 1);
      if (grid[row - 1]?.[col] === '1') recursive(row - 1, col);
    };

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === '1') {
          count++;
          recursive(row, col);
        }
      }
    }

    return cnt;
  
};

module.exports = getTotalIsles;