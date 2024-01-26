// Code made using chatGPT
function findLongestSequence(arr, targetSum) {
    let start = 0;
    let end = 0;
    let currentSum = 0;
    let longestSequence = [];

    while (end < arr.length) {
        if (currentSum < targetSum) {
            currentSum += arr[end];
            end++;
        } else {
            if (currentSum === targetSum && (end - start) > longestSequence.length) {
                longestSequence = arr.slice(start, end);
            }
            currentSum -= arr[start];
            start++;
        }
    }

    return longestSequence;
}

function loopThroughArrays(){
  const targetSums = [[6],[27],[18]];
  const inputArrays = [[1, 2, 3, 6, 9, 34, 2, 6],[3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3],[100, 101, 102, 3, 4, 5, 6, 9]]
  for (let i = 0; i < inputArrays.length; i++) {
    const result = findLongestSequence(inputArrays[i], targetSums[i][0]);
    let outputMessage = "The numbers that add up to: ";
    outputMessage += targetSums[i][0] + " (";
    for (let x = 0; x < result.length; x++){
      if (x != result.length - 1){
        outputMessage += result[x] + " + ";
      } else {
        outputMessage += result[x] + ")";
      }
    }
    console.log(outputMessage)
  }
}

loopThroughArrays();