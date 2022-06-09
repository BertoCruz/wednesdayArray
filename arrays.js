var friends = ["Mansour", "Nico", "Adolfo", "Rachel"];
var friendYears = [10, 5, 5, 6];
var isDj = [true, true, false, false];


//below will remove/return the first element of the friends array
//return: Mansour
friends.shift();


//below will remove/return the last element of the friendYears array.
//return: 6
friendYears.pop();


//below will return the "start", index [0], all the way up to
// (but excluding anything after) the "end", index [2] of the isDj array.
//return: [true,true]
isDJ.slice(0,2);


//the convention for index positioning in the array object will primarily
//note that the first element of an array will start at [0] (that is, index 0).
//below will call/return on index[0] so as to show how an array starts off in 0 and not 1.
//return: Mansour
console.log(friends[0]);
//
//
