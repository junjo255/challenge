const fairRations = B => {
    let answer = 0;
    for(let i=0; i<B.length-1; i++){
        if(B[i] % 2 === 1){
            B[i] = B[i] + 1;
            B[i+1] = B[i+1] + 1;
            answer += 2;
        }
    }
    return B[B.length - 1] % 2 === 1 ? 'NO' : answer;
}