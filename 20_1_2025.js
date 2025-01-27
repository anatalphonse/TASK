// Odd or Even
var n = 10
if( n % 2 == 0){
    console.log("even")
}else{
    console.log("odd")
}


// Postive or Negative
var n = 0
if( n > 0){
    console.log("postive")
}
else if(n < 0){
    console.log("negative")
}
else{
    console.log("it a ZERO")
}

var n = 20
for(let i = 0;i<=n;i++){
    if(i%2==0){
        console.log(i)
    }
}

// Seasons based on month
month = 5;    
switch(month) {
      case 12:
      case 1:
      case 2:
        console.log("Winter")
        break;
      case 3:
      case 4:
      case 5:
        console.log("spring")
        break;
      case 6:
      case 7:
      case 8:
        console.log("summer")
        break;
      case 9:
      case 10:
      case 11:
        console.log("Fall")
        break;
      default:
        console.log("invalid")
    }