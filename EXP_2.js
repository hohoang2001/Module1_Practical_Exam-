function findPositionIndex(value, array) {
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) return index = i + 1;
    }
    return index;
};

let array = [2, 3, 4, 5, 6];
let value = 4;
findPositionIndex(value, array) == -1 ? console.log("Giá trị không tồn tại trong array") : console.log(`Vị trí trong array là :${findPositionIndex(value, array)}`);