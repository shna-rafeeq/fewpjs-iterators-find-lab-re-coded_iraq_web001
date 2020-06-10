const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
 let newarr = arr.find((item)=>{
   
  if(item.result === "W"){
   console.log("winner")
  } 
  
  })
  return newarr;
}
superbowlWin(record);
