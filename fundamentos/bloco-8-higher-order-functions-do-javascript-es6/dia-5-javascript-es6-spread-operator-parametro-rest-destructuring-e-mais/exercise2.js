const sum = ( ...params ) => {
    return params.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(2, 3, 4, 5));