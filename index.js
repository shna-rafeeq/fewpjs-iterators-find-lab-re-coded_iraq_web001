const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
 let newarr = arr.find((item)=>{
   
  if(item.year === "1969"){
  return item.year;
  } 
  
  })
  return newarr;
}
superbowlWin(record);
