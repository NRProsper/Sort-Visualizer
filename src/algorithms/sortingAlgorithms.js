export const mergeSort = array => {
    if(array.length === 1) return array;
    let middleIdx = Math.floor(array.length/2);

    const leftPart = mergeSort(array.slice(0, middleIdx)); //Recurse call and pass a copy of array with half elements
    const rightPart = mergeSort(array.slice(middleIdx));

    let i = 0, j = 0;
    const sortedArray = [];
    while (i < leftPart.length && j < rightPart.length) {
        if(leftPart[i] < rightPart[j]) {
            sortedArray.push(leftPart[i++])
        }else {
            sortedArray.push(rightPart[j++])
        }
    }

    while (i < leftPart.length ) sortedArray.push(leftPart[i++])
    while (j < rightPart.length ) sortedArray.push(rightPart[j++])

    return sortedArray

}