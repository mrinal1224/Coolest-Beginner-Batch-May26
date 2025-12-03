var x = 10;
var output = [];

function outer() {
  if (x > 5) {
    var x = 20; // Line 7
    output.push(x);
  }
  output.push(x);
}

outer();
output.push(x); // Line 13

console.log(output.join(', '));  