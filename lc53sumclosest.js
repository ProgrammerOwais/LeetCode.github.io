/************************************* 3 sum closest
 * Given an integer array nums of length n and an integer target, find three integers 
 * in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 ********************* My approach**********************
 My approach solves the soltion but its time complexity is O(N^3) which is a lot
 so in leetCode it is not recomended error: Time limit exceeded****/
// var threeSumClosest = function (nums, target) {
//     if (nums.length == 3) {
//         return nums[0] + nums[1] + nums[2];
//     }
//     let trick = []; // using this flag array it will help you to find the closest num
//     let closest = [];
//     let trickIdx = 0;
//     let closestIdx = 0;
//     let near = nums[0] + nums[1] + nums[2];
//     // Adding one i.e "i" num with every other two num
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (i == j) continue;
//             if (j + 1 < nums.length && j + 1 != i) {
//                 closest[closestIdx] = nums[i] + nums[j] + nums[j + 1];
//                 trick[trickIdx] = Math.abs(closest[closestIdx] - target);
//                 if (trick[trickIdx] == 0) return closest[closestIdx];
//                 if (trickIdx > 0) {
//                     if (trick[trickIdx - 1] > trick[trickIdx]) {
//                         trick[trickIdx - 1] = trick[trickIdx];
//                         near = closest[closestIdx];
//                     }
//                 } else {
//                     closestIdx++;
//                     trickIdx++;
//                 }
//             }
//         }
//         // Adding two i.e "i & k" num with every other one num
//         for (let k = 0; k < nums.length; k++) {
//             if (k == i) continue;
//             for (let l = 0; l < nums.length; l++) {
//                 if (l == k || l == i) continue;
//                 closest[closestIdx] = nums[i] + nums[k] + nums[l];
//                 trick[trickIdx] = Math.abs(closest[closestIdx] - target);
//                 if (trick[trickIdx] == 0) return closest[closestIdx];
//                 if (trickIdx > 0) {
//                     if (trick[trickIdx - 1] > trick[trickIdx]) {
//                         trick[trickIdx - 1] = trick[trickIdx];
//                         near = closest[closestIdx];
//                     }
//                 } else {
//                     closestIdx++;
//                     trickIdx++;
//                 }
//             }
//         }
//     }
//     // the smallest num in the trick will be closest
//     // let small = trick[0];
//     // let close = closest[0];
//     // for (let j = 1; j < closest.length; j++) {
//     //     if (small > trick[j]) {
//     //         small = trick[j];
//     //         close = closest[j];
//     //     }
//     // }

//     // return close;
//     return near;
// };

/********************* Senion Developer approch
 * for guidance follow the give link/** https://redquark.org/leetcode/0016-3-sum-closest/
 * Here we solve this question by using two pointers technique*/
var threeSumClosest = function (nums, target) {
    // Sort the array
    nums.sort((a, b) => a - b);
    // Length of the array
    const n = nums.length;
    // Result
    let closest = nums[0] + nums[1] + nums[n - 1];
    // Loop for each element of the array
    for (let i = 0; i < n - 2; i++) {
        // Left and right pointers
        let j = i + 1;
        let k = n - 1;
        // Loop for all other pairs
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum <= target) {
                j++;
            } else {
                k--;
            }
            if (Math.abs(closest - target) > Math.abs(sum - target)) {
                closest = sum;
            }
        }
    }
    return closest;
};

// let nums = [
//     558, 316, -411, 160, 801, 568, -124, -589, 32, 897, -33, -767, -528, -180,
//     916, 813, 351, 642, -373, -919, 666, 973, -165, 831, -67, -934, -659, -18,
//     273, 201, 728, 988, -926, 409, -573, 575, -502, 745, 724, 989, -464, 903,
//     975, 980, 824, -197, -261, -761, 966, 799, -379, 96, 9, -680, -15, 476, 220,
//     -647, 365, 518, -479, -443, 337, -364, 968, -617, 862, -281, -936, -526,
//     196, 829, -191, 643, -473, 557, -870, 553, -506, 774, 784, -344, -452, 510,
//     219, -785, -1, 711, -759, -830, 10, 612, -450, -784, 53, 976, -314, -908,
//     463, -408, -846, 261, 689, -856, -687, -949, -163, -621, -233, 847, -682,
//     -805, -711, 286, 40, -831, -12, 952, -878, -226, 739, 11, -342, 74, -933,
//     -770, -840, 265, 702, 572, -453, -295, 704, -249, -835, 191, 404, 984, -820,
//     321, 632, -689, 285, -877, -643, -451, -625, 84, 889, 620, -658, 861, -397,
//     -952, 695, -386, 31, 827, -539, -350, 588, 846, -142, 314, 909, 937, 625,
//     -230, -553, 403, -763, 413, 904, -994, 272, -426, 104, -715, -159, -270,
//     716, 819, 806, 891, -47, -100, 440, -339, 918, -577, 508, -554, -478, 120,
//     -943, 25, -600, -626, 336, -567, 473, 531, 195, -259, -267, -883, 450, 170,
//     733, 491, 602,
// ];
let nums = [-1, 2, 1, -4];
console.log(threeSumClosest(nums, 1));
