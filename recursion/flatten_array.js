// Program to flatten an array: [1,2, [3,4,5], [6,7]] => [1,2,3,4,5,6,7]

// e.g ==> ["a","b",["c", [[["d","e"]]]]] => ["a","b","c","d","e"]

// var arr = ["a","b",["c", [[["d","e"]]]]];
var arr = [1, 2, [3, [[[4, 5]]]]];
function flatten(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat = flat.concat(flatten(arr[i]));
    } else flat.push(arr[i]);
  }
  return flat;
}

console.log(flatten(arr));
