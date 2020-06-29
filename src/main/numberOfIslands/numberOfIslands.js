/**
 Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

    Example 1:

    Input:
    11110
    11010
    11000
    00000

    Output: 1
    Example 2:

    Input:
    11000
    11000
    00100
    00011

    Output: 3
 */


 var numIslands = function(grid) {
    let islands = 0;
    let landSpotted = false;
    
    function isConnected(y, x) {
        let sidesConnected = 0;
        if((grid[y-1][x] === 1 || undefined) || 
           (grid[y][x+1] === 1 || undefined) ||
           (grid[y+1][x] === 1 || undefined) ||
           (grid[y][x-1] === 1 || undefined)) {
            return true;
        }    
        return false;    
    }
    
    for(let y = 0; y < grid.length; y++) {
        for(let x = 0; x < grid[y].length; x++) {
            if(grid[y][x] === 1) {
                if(!landSpotted) {
                    landSpotted = true;
                    islands++;                    
                }
                
                if(!isConnected(y, x)) {
                    landSpotted = false;
                }
            }
        }
    }
    return islands;
};