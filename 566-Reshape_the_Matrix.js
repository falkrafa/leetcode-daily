/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;

    if (m * n !== r * c) return mat;

    const reshapedMatrix = [];

    for (let i = 0; i < r; i++) {
        reshapedMatrix[i] = [];
        for (let j = 0; j < c; j++) {
            const index = i * c + j;
            reshapedMatrix[i][j] = mat[Math.floor(index / n)][index % n];
        }
    }

    return reshapedMatrix;
};

console.log(matrixReshape([[1,2],[3,4]], 2, 4))
