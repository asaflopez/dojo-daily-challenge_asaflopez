/*
JUMP GAME II
    You are given a 0-indexed array of integers nums of length n. You are initially postartitioned at nums[0].

    Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

    0 <= j <= nums[i] andi + j < n
    Return the minimum number of jumps to reach nums[n - 1]. 
    The test cases are generated such that you can reach nums[n - 1].
*/

var nums = [2,3,1,1,4];
function jumpCounter (nums) {
    // console.log("jumpCounter", nums)
    let i = 0;
    let count = 0;
    let startI = 0; // start index
    let endI = 0; // end index
    let lastI = nums.length-1; // last index
    while (i < lastI) {
        // console.log("-----NEW ITERATION-----")
        if (nums[i] < lastI - i) {
            startI = i+1;
            // console.log("next element", nums[i+nums[i]])
            endI = (i + nums[i]) < lastI ? i + nums[i] : lastI;
            // console.log("endI", endI)
            if (endI < lastI) {
                let indexDiff = endI-startI;
                // console.log("indexDiff", indexDiff)
                i = indexDiff >= 1 ? checkBehind(nums, startI, endI, nums[endI]) : endI;
                // console.log("index", i, "value", nums[i])
            } else {
                i = lastI;
            }
            
            count++;
        } else {
            count++;
            i = nums.length - 1;
        }
    }
    console.log(count)
}

/**
 * 
 * @param {*} array // array to be analyzed
 * @param {*} startI // start index
 * @param {*} endI // end index
 * @param {*} value // value to be compared
 */
function checkBehind (array, startI, endI, value) {
    // console.log("checkBehind")
    let segment = array.slice(startI, endI);
    let segmentMax = Math.max(...segment);
    // console.log("segment", segment, "segmentMax", segmentMax)
    // console.log("segmentMax index", segment.indexOf(segmentMax))
    // console.log("endI", endI);
    // console.log(endI, "-", segment.length, "+", segment.indexOf(segmentMax), "=", (endI - segment.length + segment.indexOf(segmentMax)))
    let newMilestone = segmentMax > value ? endI - segment.length + segment.indexOf(segmentMax) : endI;
    // console.log("newMilestone", newMilestone, "value", array[newMilestone]);
    
    return newMilestone;
}

jumpCounter([2,3,1,1,4]);
jumpCounter([2,3,0,1,4]);
jumpCounter([1,1,1,1,1,1,1,1]);
jumpCounter([3,1,3,1,2,1,1,4]);