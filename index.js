const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
 let newarr = arr.find((item)=>{
   
  if(item.result === "W"){
  return item.year;

  } 
  
  })
  return newarr;
}
superbowlWin(record);
