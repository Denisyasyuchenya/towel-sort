
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) ) {
    return [];
}
  let arr = [];
  matrix.forEach((element,count) => {
    if(count%2){
        let x = element;
     arr=arr.concat(x.reverse())
    } else{
 arr=arr.concat(element)
    }
});
return arr;
}
