const checkGraids = (graidsArray) => {
    let result = false;
    graidsArray.forEach((graid) => {
        if (graid >= 0 && graid <= 25) {
            result = true;
        }
    });
    return result;
}

// Классический Array.sort(compareNumeric) не подходит ломается на 45 тесте и того решено 40/88 (1-5 тесты не считаются так как они в примере)
const compareNumeric = (a, b) => {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}

// не подходит прерывается на 25 тесте и того решено 20/88 (1-5 тесты не считаются так как они в примере)
const bubbleSort = (arr) => {   // пузырьковая сортировка
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] < arr[j + 1]) {  // знак меньше чтоб получился реверс
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Меняем значения переменных
            }
        }
    }
    return arr;
};
// не подходит прерывается на 25 тесте и того решено 20/88 (1-5 тесты не считаются так как они в примере)
const selectedSort = (arr) => { //Сортировка выбором
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] < arr[j]) {
                min = j; // Меняем значение переменной на наибольшее значение
            }
        }

        [arr[i], arr[min]] = [arr[min], arr[i]]; // Меняем значения переменных
    }
    return arr;
};

// не подходит прерывается на 25 тесте и того решено 20/88 (1-5 тесты не считаются так как они в примере)
function cycleSort(arr) {   // циклическая сортировка
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        let position = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > value) {
                position++;
            }
        }
        if (position === i) {
            continue;
        }
        while (value === arr[position]) { // Избавляемся от дубликатов
            position++;
        }

        [arr[position], value] = [value, arr[position]]; // Меняем значения переменных

        while (position !== i) { // Запускаем цикл в обратную сторону
            position = i;
            for (let k = i + 1; k < arr.length; k++) {
                if (arr[k] > value) {
                    position++;
                }
            }
            while (value === arr[position]) { // Избавляемся от дубликатов
                position++;
            }
            [arr[position], value] = [value, arr[position]]; // Меняем значения пременных
        }
    }
    return arr;
}

/**
* @param {number} N - целое число, количество сотрудников готовых к объединению
* @param {number[]} staff - массив длины N с грейдами доступных сотрудников
* @param {number} K - целое число, количество доступных клавиатур
* @returns {number}
*/
// module.exports = function (N, staff, K) {
const test = (N, staff, K) => {
    if (
        (N >= 1 && N <= (10 ** 7 + 100)) &&
        checkGraids(staff) &&
        (K >= 1 && K <= N)
    ) {
        let result = 0;
        let obj = {};
        let objKeys = [];
        for (i = 0; i < staff.length; i++) {
            if (obj[staff[i]]) {
                obj[staff[i]]++;
            }
            else {
                obj[staff[i]] = 1;
            }
        }
        console.log(obj)

        objKeys = Object.keys(obj);
        console.log(objKeys)

        for (i = objKeys.length; i > 0; i--) {
            console.log(`K=${K}`)
            if (K >= obj[objKeys[i - 1]]) {
                console.log('in true')
                result += objKeys[i - 1] * obj[objKeys[i - 1]];
                K -= obj[objKeys[i - 1]];
            }
            else {
                console.log('in false')
                result += objKeys[i - 1] * K;
                break;
            }
        }
        console.log('=========================')
        return result;
    }
    else {
        return 'Ошибка входных значений!';
    }
}


let tests = [
    { "N": 8, "staff": [5, 13, 8, 4, 4, 15, 1, 9], "K": 8 },
    { "N": 11, "staff": [14, 8, 15, 19, 2, 21, 13, 21, 12, 10, 8], "K": 5 },
    { "N": 15, "staff": [19, 20, 5, 10, 2, 20, 7, 9, 1, 3, 13, 14, 3, 3, 4], "K": 1 },
    { "N": 12, "staff": [22, 7, 24, 24, 11, 22, 24, 3, 9, 16, 2, 19], "K": 7 },
    { "N": 7, "staff": [10, 3, 21, 23, 6, 3, 8], "K": 4 },
    { "N": 15, "staff": [19, 20, 5, 10, 2, 20, 7, 9, 1, 3, 13, 14, 3, 3, 4], "K": 1 }
]
tests.forEach((testItem) => {
    console.log(test(testItem.N, testItem.staff, testItem.K));

})
