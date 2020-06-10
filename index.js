const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
 let newarr = arr.find((item)=>{
   
  if(item.result === "W"){
 let year = item.year;
 return year
  } 
  
  })
  // return newarr;
}
superbowlWin(record);
