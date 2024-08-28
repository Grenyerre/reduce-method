  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
// acc is the accumulator and curr is the currentValue
  console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;
});
console.log(sum);
/**
 * Accumulator: 0 Current Value: 1 Total: 1
 * Accumulator: 1 Current Value: 2 Total: 3
 * Accumulator: 3 Current Value: 3 Total: 6
 * Accumulator: 6 Current Value: 4 Total: 10
 * 10
 * Why did the function only execute 4 times?
 * The reduce method actually takes a second parameter,
 * the initial value to use as the accumulator. If this 
 * is not specified the accumulator will default to the first value
 */

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
/**
 * The 1st set of curly braces are the boundaries of the callback function.
 * The 2nd set, after the comma, is the initial value, an empty array.
 */
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
  }, {});

  console.log(experienceByProfession);
  