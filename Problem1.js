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