const testVar = {}

function testFunc() {
  return "hi"
}
const sadReality = record.map( yObj => Object.assign({}, yObj, { result: "N/A" } ) )

function superbowlWin(sadReality){
 let newarr = sadReality.find((item)=>{
   
  return item.result === "W"
 
  })
  return newarr;
}
superbowlWin(record);
