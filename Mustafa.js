Sual-4 (Helli)
function sum(array) {
let sum= 1;
for (let i=0; i<array.length; i++) {
sum = sum * array[i];
}
return sum;
}
const sample_array = [1,2,4,6,71,2,4,9,100];
console.log(sum(sample_array));