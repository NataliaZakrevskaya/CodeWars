function countPositivesSumNegatives(input) {
    if(input === null || input === [] ) {
        return [];
    } let result = [];
    let arrPositive = input.filter(el => el > 0); // массив чисел больше 0
    let arrNegative = input.filter(el => el < 0); // массив чисел меньше 0
    let countOfPositiveValues = arrPositive.length;
    let sumOfNegative = arrNegative.reduce((sum, current) => sum + current, 0);
    if(countOfPositiveValues === 0 && sumOfNegative === 0){
        return [];
    }
    result[0] = countOfPositiveValues;
    result[1] = sumOfNegative;
    return result;
} 