// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem



function jumpingOnClouds(c) {
    let jumps = 0;
    let idx = 0;
    
    while(idx < c.length - 1) {
        if(c[idx + 1] === 1 || (c[idx + 2] === 0 && idx + 2 <= c.length - 1)) {
            idx = idx + 2;
            jumps++;
        } else {
            idx++;
            jumps++
        }
    }
    return jumps;
}

