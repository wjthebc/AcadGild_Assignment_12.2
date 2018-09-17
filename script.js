//sets numbers array
var numbers = [10, 8, 12, 36];

//sets var that doubles numbers
var doubles = numbers.map(function(x){
return x * 2
});

//sets var that filters numbers that are > 20
var lessThanTwenty = numbers.filter(function(number){
  return number < 20
});

//sets var that adds all values in var lessThanTwenty
var addArray = lessThanTwenty.reduce(function(sum, value){
  return sum + value;
})