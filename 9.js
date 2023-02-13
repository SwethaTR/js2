
const n = 48;
const oddeven = (n, sum = 0) => {
   if(n){
      return oddeven(Math.floor(n / 10), sum + (n % 10));
   };
   if(sum % 2 === 1){
    console.log("oddish");
   }
   else{
    console.log("evenish");
   }
};
console.log(oddeven(n));