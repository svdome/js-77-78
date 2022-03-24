/* classroom.js */

/** @param {number[]} grades */
/** @param {number[]} grades */
export const getNumberOfGrades = grades => {
    return grades.length;
};

/** @param {number[]} grades */
export const getSumGrades = grades => {
    let sum = 0;
    grades.forEach(grad => {
        sum = sum + grad;
    })
    return sum;

};

/** @param {number[]} grades */
export const getAverageValue = grades => {
    let sum = 0;
    grades.forEach(grad => {
        sum = sum + grad;
    })
    return sum / grades.length;
};

/** @param {number[]} grades */
export const getPassingGrades = grades => {
    return grades.filter((grad) => {
        return grad >= 10;
    });
};

/** @param {number[]} grades */
export const getFailingGrades = grades => {
    return grades.filter((grad) => {
        return grad <= 9;
    });
};

/** @param {number[]} grades */
export const getRaisedGrades = grades => {
    return grades.map(grad => {
        if (grad >= 20) {
            return grad;
        }
        return grad + 1;
    });

};