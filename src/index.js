module.exports = function towelSort (matrix = []) {
    let sortArr = [];
    for (let i = 0; i < matrix.length; i++) {
        sortArr = sortArr.concat(i % 2 === 0 ? matrix[i].sort((a, b) => a - b) : matrix[i].sort((a, b) => b - a));
    }
    return sortArr;
};
