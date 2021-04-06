(function greet() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
let a = names.length;
let i;
let message ='hh';
function check() {
    
for (i = 0; i < a; i++) {
    
    if (names[i].startsWith('J' || 'j')) {
        message="GOOD BYE";
        console.log(message + '  '+names[i]);
    }
    else {
        message="HELLO";
        console.log(message + '  '+ names[i] );
    
    }
  }
  
}


check();



})();