// let var_int = 10;
// let var_float = 8.4;
// let var_str = 'No';
// console.log(var_int, var_float, var_str);

// var_int *= 3.5
// ++var_float
// var_str = 'No'.repeat(2) + 'Yes'.repeat(3)
// console.log(var_int, var_float, var_str);



//                  const sumAll = arr => arr.flat().reduce((a,b)=> a + b, 0)

//                    console.log(sumAll([[1,2,1],[3,2,2],[0,1,3]]));
// console.log(5700%5000);
function setPaySum(paySum){
   const availableNotes = [5000,2000,1000,500,200,100];
   const arr = availableNotes.reverse().reverse()
   const res = []
   for(let i = 0; i < arr.length; i++){
      let note = arr[i];

      while(paySum - note >= 0){
         paySum -= note;
         res.push(note)
      }
   }
   return res.reduce(function (stack, value) {
      return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {});
}
console.log(setPaySum(7800));