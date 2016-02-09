/*Problem 1
* Multiples of 3 and 5
*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
*The sum of these multiples is 23.
*Find the sum of all the multiples of 3 or 5 below 1000.
*
*/
function natural(num) {
    var count = 0;
    for (var i = 1 ; i < num ; i++) {
        if(i % 3 === 0 || i % 5 ===0){
          count +=  i; 
          // So the loop will go through all numbers here.whether they are divisible by 3 or by 5.
          //Then they get added to count and so on.
        }
    }
    return count;
}
natural(1000);
