const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// There is an array I want you to grab a middle element and move it to the left.
// stop when that middle element is at its most left
// console logging it every time a move has been made
// [1, 2, 3, 4, 5, 6, 7, 8, 10] <----- starting
// [1, 2, 3, 5, 4, 6, 7, 8, 10]
// [1, 2, 5, 3, 4, 6, 7, 8, 10]
// [1, 5, 2, 3, 4, 6, 7, 8, 10]
// [5, 1, 2, 3, 4, 6, 7, 8, 10]


const moveLeft = (data) => {
    const middleIndex = Math.floor(data.length / 2); //step 1. get the middle index
    const target = data[middleIndex] //step 2. identify the number that needs to to be moved
    for(let i = middleIndex - 1; i >= 0; i-=1){ //step 3. create a for loop that loops the number of times that a move must be made
        data[i + 1] = data[i]; //step 4. take the value at index i and copy it over to the right.
        data[i] = target;//step 5. replace the value at element i w/ our number to be moved
        console.log(data);
    }
}

moveLeft(arr);