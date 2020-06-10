const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
 let newarr = arr.find((item)=>{
   
  return item.result === "W"
 
  })
  return newarr;
}
superbowlWin(record);
